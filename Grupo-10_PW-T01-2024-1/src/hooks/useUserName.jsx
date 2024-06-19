import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../services/firebaseConnection';

const useUserName = () => {
  const [userName, setUserName] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const fetchUserName = async () => {
        try {
          const userDoc = await getDoc(doc(firestore, "Users_Names", user.uid));
          if (userDoc.exists()) {
            setUserName(userDoc.data().name);
          }
        } catch (error) {
          console.error("Error fetching user name:", error);
        }
      };
      fetchUserName();
    }
  }, [user]);

  return userName;
};

export default useUserName;
