from core.domain import question_domain


def _create_question(commiter_id, question, commit_message, commit_cmds):
    pass


def save_new_question(commiter_id, question):
    """ Saves a new question. """
   commit_message = (
   'New question created with title \'%s\'.' % question.question_title)
   _create_question(committer_id, collection, commit_message, [{}])


def delete_question():
    pass
