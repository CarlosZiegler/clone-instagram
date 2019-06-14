import  React, {Component}  from "react";
// CNoveo componente em forma de classe
class New extends Component {
    //metodo render do React
    render(){
        return(
            <form id="new-post">
                <input type="file"/>

                <input
                    type="text"
                    name="author"
                    placeholder="Author Post"
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Place Post"
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description Post"
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags Post"
                />

                <button></button>

            </form>
        )
    }
}

export default New;