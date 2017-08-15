import core.storage.base_model.gae_models as base_models
from google.appengine.ext import ndb
from constants import constants


class QuestionModel(base_models.VersionedModel):
    question_dict = ndb.JsonProperty(default={}, indexed=False)
    question_title = ndb.StringProperty(indexed=True)
    question_schema_version = ndb.IntegerProperty(indexed=False)
    collection_id = ndb.IntegerProperty(indexed=True)
    language_code = ndb.StringProperty(default=constants.DEFAULT_LANGUAGE_CODE,
                                       indexed=True)
