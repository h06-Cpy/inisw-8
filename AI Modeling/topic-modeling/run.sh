# run.sh
pip install bertopic
pip install sentence-transformers datasets
pip install -U kaleido
gdown '1wVh8tP0XcOuabv9EUa6hnXiykqjTqQ1t&confirm=t'
unzip database_csv.zip -d /content/topic-modeling/data

# 💙 1가지를 수정해 주시면 정상적으로 돌아가요! 💙


# 1. 허깅페이스 로그인 토큰
# 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
huggingface-cli login --token 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






python main.py \
  --output_path "/content/drive/MyDrive/inisw08/bertopic" \
  --model_name "ugiugi/inisw08-T5-mlm-adafactor_test" \
  --db_name "preproc_6_2.csv" \
  --repo_name "T5-BERTopic-bs32-ep100" \
  --max_seq_length 512 \
  --batch_size 32 \
  --n_epoch 5 \
  --use_amp \
  --cls_token \
  --do_lower \
  --drive 
  
    
