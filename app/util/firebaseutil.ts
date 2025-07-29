import { addDoc, collection, doc, DocumentData, getDoc, getDocs, limit, orderBy, query, QueryDocumentSnapshot, serverTimestamp, setDoc, where } from "firebase/firestore";
import { db } from "@/app/util/firebase";

const documentExists = async (collectionName: string, documentId: string) => {
    const collectionRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(collectionRef);
    if (docSnap.exists()) {
        return true;
    } else {
        return false;
    }
};

export async function getAllDocuments<T = DocumentData>(
  collectionName: string
): Promise<Array<T & { id: string }>> {
  try {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc: QueryDocumentSnapshot) =>
        ({
          id: doc.id,
          ...(doc.data() as T),
        } as T & { id: string })
    );
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
}



export const getDocument = async (collectionName: string, documentId: string) => {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export const getRecentPosts = async (collectionName: string) => {
  try {
    const q = query(collection(db, collectionName), orderBy('timestamp', 'desc'), limit(2));
    const querySnapshot = await getDocs(q);
    const recentPosts = querySnapshot.docs.map(doc => doc.data());
    return recentPosts;
  } catch (error) {
    console.error('Error getting recent posts:', error);
    throw error;
  }
};

export const createDocument = async (collectionName: string, data: any) => {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    return docRef;
}

export async function fetchWorkouts(userId: string) {
  const workoutsRef = collection(db, `users/${userId}/workouts`);
  const querySnapshot = await getDocs(workoutsRef);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export async function addWorkout(userId: string, workoutData: any) {
  const workoutsRef = collection(db, `users/${userId}/workouts`);
  const docRef = await addDoc(workoutsRef, workoutData);
  console.log("Document written with ID: ", docRef.id);
}

export async function setWorkout(userId: string, workoutId: string, workoutData: any) {
  const workoutRef = doc(db, `users/${userId}/workouts`, workoutId);
  await setDoc(workoutRef, workoutData);
  console.log("Document set with ID: ", workoutId);
}


export default documentExists