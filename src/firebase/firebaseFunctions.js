import { db } from '.';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

export const getAllitems = async (collectionType) => {
  const data = await getDocs(collection(db, collectionType));
  const tasks = data.docs.map((el) => ({ ...el.data(), id: el.id }));

  return tasks;
};

export const addItem = async (obj, collectionType) => {
  let isComplete = false;

  try {
    await addDoc(collection(db, collectionType), {
      name: 'task',
      description: 'description',
      date: new Date(),
      due_date: new Date(),
      isChange: false,
      done: false,
    });

    isComplete = true;
  } catch (error) {
    console.log(error);
  }

  return isComplete;
};

export const deleteItem = async (id, collectionType) => {
  let isComplete = false;
  try {
    const itemDoc = await doc(db, collectionType, id);
    await deleteDoc(itemDoc);

    isComplete = true;
  } catch (error) {
    console.log(error);
  }

  return isComplete;
};

export const updateItem = async (id, collectionType, obg) => {
  let isComplete = false;
  try {
    const itemDoc = await doc(db, collectionType, id);
    await updateDoc(itemDoc, odj);

    isComplete = true;
  } catch (error) {
    console.log(error);
  }

  return isComplete;
};

export const readItem = async (id, collectionType) => {
  let isComplete = false;
  let data = null;

  try {
    const itemDoc = await doc(db, collectionType, id);
    const docSnap = await getDoc(itemDoc);
    data = docSnap.exists() ? docSnap.data() : null;
    isComplete = true;
  } catch (error) {
    console.log(error);
  }

  if (data === null || data === undefined) return null;

  return { data, isComplete };
};
