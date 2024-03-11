import React from 'react'

export default function Form_blank(props) {
    const form = props;
  
    return (
        <div className='booking-form-item'>
            <span>
                {form.title}
            </span>
            <form action="" method="POST">
                <input type="text"></input>
            </form>
        </div>
    )
}
