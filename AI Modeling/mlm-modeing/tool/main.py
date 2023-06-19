import argparse

from utils import setup
from get_pytorch_bin import get_pytorch_bin


if __name__ == '__main__':

  p = argparse.ArgumentParser()
  p.add_argument("--drive", action='store_true', help='drive 파일을 저장하고 싶다면!')
  p.add_argument("--model_name", type=str, default='inisw08-T5-mlm-adafactor_test', help='wandb, run_name')

  
  args = p.parse_args()
  setup(args)
  get_pytorch_bin(args)
  
  
