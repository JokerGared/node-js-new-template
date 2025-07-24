import {
  addArticleToSaved,
  deleteArticleFromSaved,
  getAuthors,
  getSavedArticles,
  getUserArticles,
  getUserById,
} from '../services/users';

export const getUserByIdController = async () => {
  await getUserById();
};

export const getSavedArticlesController = async () => {
  await getSavedArticles();
};

export const getUserArticlesController = async () => {
  await getUserArticles();
};

export const addArticleToSavedController = async () => {
  await addArticleToSaved();
};

export const deleteArticleFromSavedController = async () => {
  await deleteArticleFromSaved();
};

export const getAuthorsController = async () => {
  await getAuthors();
};
