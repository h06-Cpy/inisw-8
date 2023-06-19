import math
import logging
from datetime import datetime

import torch
from torch.utils.data import DataLoader
from datasets import load_dataset
from sentence_transformers import SentenceTransformer, LoggingHandler, losses, models, util
from sentence_transformers.evaluation import EmbeddingSimilarityEvaluator
from sentence_transformers.readers import InputExample

from datasets import load_dataset

import warnings
warnings.filterwarnings('ignore')

from get_model import get_model
from etc.utils import preprocess
#args

def get_train(args):
  # output_path = args.output_path # "/content/drive/MyDrive/LDA/Robert_sentence_transformers/out/training_klue_sts_"
  # model_name = args.model_name # "ugiugi/inisw08-DistilBERT-mlm-adamw_torch"
  # max_seq_length = args.max_seq_length # 512
  # use_amp = args.use_amp # True
  # batch_size = args.batch_size # 32
  # n_epoch = args.n_epoch #4
  # cls_token = args.cls_token # True
  # do_lower = args.do_lower # True



  logging.basicConfig(
      format="%(asctime)s - %(message)s",
      datefmt="%Y-%m-%d %H:%M:%S",
      level=logging.INFO,
      handlers=[LoggingHandler()],
  )




  datasets = load_dataset("glue", "stsb")
  # get_model
  model = get_model(args)
  train_samples, dev_samples = preprocess(datasets)
  model_save_path = args.output_path + ("/") + args.model_name.replace("/", "-")
  


  

  # train_dataloader, train_loss, evaluator

  train_dataloader = DataLoader(
      train_samples,
      shuffle=True,
      batch_size=args.batch_size,
  )
  train_loss = losses.CosineSimilarityLoss(model=model)


  evaluator = EmbeddingSimilarityEvaluator.from_input_examples(
      dev_samples,
      name="sts-dev",
  )

  n_epoch = args.n_epoch
  warmup_steps = math.ceil(len(train_dataloader) * n_epoch  * 0.1)  # 10% of train data for warm-up
  logging.info(f"Warmup-steps: {warmup_steps}")


  model.fit(
      train_objectives=[(train_dataloader, train_loss)],
      evaluator=evaluator,
      epochs=n_epoch,
      evaluation_steps=1000,
      warmup_steps=warmup_steps,
      output_path=model_save_path,
      show_progress_bar=True,
      save_best_model=True, 
      use_amp=args.use_amp
  )
  # print('hub 에 모델을 등록합니다.!')
  # model.save_to_hub(
  #   organization='ugiugi',
  #   repo_name=args.repo_name,
  #   exist_ok=True,
  #   replace_model_card=True
  # )

  print('모델 학습이 완료 되었습니다!')



