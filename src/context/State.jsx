import Context from "./Context";
import { useState,useEffect } from "react";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firebaseFirestore as fireDB } from '../firebase/FirebaseConfig';
import { toast } from 'react-hot-toast';

const State = ({children}) => {
    const [loading, setLoading] = useState(false);

    const [getAllProduct, setAllProduct] = useState([]);

    const getAllProductFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setAllProduct(productArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Order State 
    const [getAllOrder, setGetAllOrder] = useState([]);


    /**========================================Order====================================**/

    const getAllOrderFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "order"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let orderArray = [];
                QuerySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllOrder(orderArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Delete oder Function
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'order', id))
            toast.success('Order Deleted successfully')
            getAllOrderFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

       // user State 
       const [getAllUser, setGetAllUser] = useState([]);


       /**========================================================================
        *========================================================================**/
   
       const getAllUserFunction = async () => {
           setLoading(true);
           try {
               const q = query(
                   collection(fireDB, "users"),
                   orderBy('time')
               );
               const data = onSnapshot(q, (QuerySnapshot) => {
                   let userArray = [];
                   QuerySnapshot.forEach((doc) => {
                       userArray.push({ ...doc.data(), id: doc.id });
                   });
                   setGetAllUser(userArray);
                   setLoading(false);
               });
               return () => data;
           } catch (error) {
               console.log(error);
               setLoading(false);
           }
       }
   
       useEffect(() => {
           getAllProductFunction();
           getAllOrderFunction();
           getAllUserFunction();
       }, []);
   

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            getAllProduct,
            getAllProductFunction,
            getAllOrder,
            deleteProduct,
            getAllUser
        }} >
            {children}
        </Context.Provider>
    );
}
export default State;