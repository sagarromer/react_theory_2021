import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4 } from 'uuid';

function useEntryDetails(desc = '', val = '', isExp = true) {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();

    function addEntry() {
        dispatch(
            addEntryRedux({
                id: uuidv4(),
                description,
                value,
                isExpense,
            })
        );
        resetValues();
    }

    function resetValues() {
        setDescription('');
        setValue('');
        setIsExpense(true);
    }

    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        
    };
}

export default useEntryDetails;