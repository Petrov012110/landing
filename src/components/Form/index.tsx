import React from 'react';
import { useForm } from "react-hook-form";
import './index.less';

type FormData = {
    firstName: string;
    lastName: string;
};


export const MultipleInputs = () => {


    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
    // firstName and lastName will have correct type

    return (
        <div className="form-registration">
            <form onSubmit={onSubmit}>
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>Last Name</label>
                <input {...register("lastName")} />
                <button
                    type="button"
                    onClick={() => {
                        setValue("lastName", "luo"); // ✅
                        // errors.bill; // ❌: property bill does not exist
                    }}
                >
                    Войти
                </button>
            </form>
        </div>
    );
}