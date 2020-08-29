import React from 'react'

export const SearchHero = () => {
    return (
        <div>
            <form className="form-inline formStyle">                
                <input type="text" className="form-control mb-2 col-4 mr-3" id="inlineFormInputName2" placeholder="Search Hero"/>                

                <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>           
        </div>
    )
}
