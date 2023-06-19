from transformers.modeling_flax_pytorch_utils import load_flax_checkpoint_in_pytorch_model
from transformers import T5Config, T5Model
from transformers import AutoTokenizer 


def get_pytorch_bin(args):
  # args
  model_name = args.model_name 
  
  if args.drive:
    config = T5Config.from_pretrained(f"{model_name}")
    model = T5Model(config)
    load_flax_checkpoint_in_pytorch_model(model, f"/content/mlm-modeing/{model_name}/flax_model.msgpack")
    model.save_pretrained(f"/content/drive/MyDrive/inisw08/{args.model_name}")

    # tokenizer
    tokenizer = AutoTokenizer.from_pretrained(f"{model_name}")
    tokenizer.save_pretrained(f"/content/drive/MyDrive/inisw08/{args.model_name}") 
    print('드라이이브 모델 저장 완료!!!!!')

  else:
    config = T5Config.from_pretrained(f"{model_name}")
    model = T5Model(config)
    load_flax_checkpoint_in_pytorch_model(model, f"/content/mlm-modeing/{model_name}/flax_model.msgpack")
    model.save_pretrained(f"./inisw08/{args.model_name}")
    
    # tokenizer
    tokenizer = AutoTokenizer.from_pretrained(f"{model_name}")
    tokenizer.save_pretrained(f"./inisw08/{args.model_name}") 
    print('로커어얼에 모델 저장 완료!!!!!')


# ('.1tokenizer_config.json',
#  '.1special_tokens_map.json', 
#  '.1vocab.json', 
#  '.1merges.txt',
#  '.1added_tokens.json',
#  '.1tokenizer.json')
