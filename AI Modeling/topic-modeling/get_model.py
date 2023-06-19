from sentence_transformers import SentenceTransformer, LoggingHandler, losses, models, util
def get_model(args):


  embedding_model = models.Transformer(model_name_or_path=args.model_name,
                                     max_seq_length=args.max_seq_length,
                                     do_lower_case=args.do_lower
                                     )


  pooler = models.Pooling(
    embedding_model.get_word_embedding_dimension(),
    pooling_mode_mean_tokens=True,
    pooling_mode_cls_token=args.cls_token,
    pooling_mode_max_tokens=True,
  )


  model = SentenceTransformer(modules=[embedding_model, pooler])


  return model

