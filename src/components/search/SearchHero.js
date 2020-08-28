import React from 'react'

export const SearchHero = () => {
    return (
        <div>
            <form class="form-inline mt-4 mb-2 formStyle">                
                <input type="text" class="form-control mb-2 col-4 mr-sm-2" id="inlineFormInputName2" placeholder="Search Hero"/>                

                <button type="submit" class="btn btn-primary mb-2">Search</button>
            </form>           
        </div>
    )
}
