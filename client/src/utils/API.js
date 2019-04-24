import axios from "axios";

export default{

  // Creates a new list, passes in listData collected from the user
  createList:function(listData){
    return axios.post("/api/list", listData);
  },
  // Loads a list with a specific id
  getList:function(id){
    return axios.get("/api/list:"+id);
  },
  // Deletes a specific list
  deleteList:function(id){
    return axios.delete("/api/list:"+id);
  },
  // Inverts the checked status of the item
  checkItem:function(id, itemStatus){
    return axios.put("/api/listItem:"+id, itemStatus);
  },
  // Updates the status of a list -> Locks a list into checkout mode
  checkOut:function(listID){
    return axios.put("/api/list:"+id, listStatus)
  }

};
