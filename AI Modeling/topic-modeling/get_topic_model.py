import os
from bertopic import BERTopic
from sentence_transformers import SentenceTransformer
from etc.utils import get_db, get_preproc

def get_topic_model(args):
  output_path = args.output_path
  model_name = args.model_name.replace("/", "-")
  
  model_s = SentenceTransformer(f'{output_path}/{model_name}')
  topic_model = BERTopic(embedding_model=model_s)



  raw_all, raw = get_db(args)
  docs = get_preproc(raw_all)
  docc = 'raw_all'
  print('DB file이 클수록 오래 걸립니다.!!')
  topics, probabilities = topic_model.fit_transform(docs)
  topic_model.save(f"{output_path}/{docc}_model")
  return print('get_topic_model 종료')
