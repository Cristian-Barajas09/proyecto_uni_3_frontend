import { PropsWithChildren } from "react";
import "./styles.css";
interface Props {
    currentPage: number;
    numberOfPages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
    onPage: (page: number) => void;
}

function Paginator({ numberOfPages, currentPage, onPage, onNextPage, onPreviousPage }: PropsWithChildren<Props>) {
    return (
        <div className="paginator">
            <button type="button" onClick={onPreviousPage} className="paginator__item">Previous</button>
            {
                Array.from({length: numberOfPages}, (_, index) => (
                    <button
                        key={index}
                        className={`paginator__item ${index + 1 === currentPage ? 'paginator__item--active' : ''}`}
                        type="button"
                        onClick={() => onPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))
            }
            <button type="button" className="paginator__item" onClick={onNextPage}>Next</button>
        </div>
    )
}

export {
    Paginator
}