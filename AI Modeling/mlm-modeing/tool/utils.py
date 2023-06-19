import os
def setup(args):
  assert 'drive' in os.listdir('/content') # 당황하지 마세요! 드라이브 연결을 안해놓았어요! 코랩 드라이브 연결해주세요!
  if args.drive:
    print('drive 에 모델 파일 저장됩니다.')
    os.makedirs('/content/drive/MyDrive/inisw08', exist_ok=True)
    os.makedirs(f'/content/drive/MyDrive/inisw08/{args.model_name}', exist_ok=True)
  else:
    print('로컬 에 모델 파일 저장됩니다.')
    os.makedirs('./inisw08', exist_ok=True)
    os.makedirs(f'./inisw08/{args.model_name}', exist_ok=True)

  
