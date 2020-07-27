import React from 'react'
import './Pagination.scss'
import { useState } from 'react';
import ArrowBack from '../../../assets/icons/back.svg'
import ArrowNext from '../../../assets/icons/next.svg'

const Paginate = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize - 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const handleClickBack = () => {
        setPortionNumber(portionNumber - 1);
    }

    const handleClickNext = () => {
        setPortionNumber(portionNumber + 1);
    }

    return (
        <div className="pagination" >
            {portionNumber > 1 &&
                <img className="pagination-back" onClick={handleClickBack} src={ArrowBack} alt="back" />
            }
            <div>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => (
                        <span onClick={(e) => {
                            onPageChanged(p);
                        }}>
                            {p + 1}
                        </span>
                    ))}
                {portionCount > portionNumber &&
                    <img src={ArrowNext} className="pagination-next" onClick={handleClickNext} alt="next" />}
            </div>
        </div>
    );
}

export default Paginate;