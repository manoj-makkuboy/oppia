class Question(object):
    """ Domain object for Question. """

    def __init__(self, question_dict, question_title, question_schema_version,
                 collection_id, language_code):
        self.question_dict = question_dict
        self.question_title = question_title
        self.question_schema_version = question_schema_version
        self.collection_id = collection_id
        self.language_code = language_code
