import _ from 'lodash';
import useAuthorStore from '@/stores/author';
import type { TAuthor } from '../author';

interface ObjectWithAuthorId {
  authorId: number
}

type TReturnValue <T> = Omit<T, 'authorId'> & {
  author: TAuthor
}

function joinWithAuthor<T extends ObjectWithAuthorId>(obj: T, authors: TAuthor[]): TReturnValue<T> {
  const { authorId, ...newObj } = obj;
  const clonedObj = _.cloneDeep(newObj);

  return {
    ...clonedObj,
    author: authors.find((item) => item.id === authorId) as TAuthor,
  };
}

async function joinWithAuthors<T extends ObjectWithAuthorId>(arr: T[]): Promise<TReturnValue<T>[]> {
  const { asyncAuthors } = useAuthorStore();

  const authors = await asyncAuthors;

  return arr.map((item) => joinWithAuthor(item, authors));
}

export default joinWithAuthors;
