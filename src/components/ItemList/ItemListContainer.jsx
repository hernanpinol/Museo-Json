import { books } from "../ArrayProducts/arrayProducts";
import { ItemList} from "./itemList";
import "./itemListContainer.css";

const ItemListContainer = () => {
  
  const listPromise =() =>{
    return new Promise ((resolve, reject) =>{
        if (true){
            setTimeout(() => {
                resolve (books)
            }, 2000)
        } else{
            reject()
        }
    })
  }
  
listPromise()
 
return (
    <>
      <div className="greeting-page">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
