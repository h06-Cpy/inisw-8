from bertopic import BERTopic
import os

def get_topic(args):
  dbname = args.db_name
  dbname_ =dbname.split('.')[0]

  model_name = args.model_name.replace("/", "-")
  output_path = args.output_path
  print('BERTopic Topic Modeling')
  load_model = BERTopic.load(f"{output_path}/raw_all_model")
  print('BERTopic, Making Barchart')
  barchart = load_model.visualize_barchart()
  print('Barchart 를 저장하고 있습니다.')
  if args.drive:
    barchart.write_image(f"/content/drive/MyDrive/inisw08/bertopic/barchart/{model_name}{dbname_}_barchart.png")
  else:
    barchart.write_image(f"/content/inisw08/bertopic/barchart/{model_name}_barchart.png")
  return print('EveryThing is END')
