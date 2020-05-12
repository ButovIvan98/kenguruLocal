import React from 'react';
import BlockResult from "./blockResult/blockResult";
import FilterResult from "./filterResult/filterResult";

const CalculateResult = (props) => {
    let listBLock = props.calculate.resultCalculate.map(nav => (
            <BlockResult
                img={nav.imgCompany}
                nameTK={nav.company}
                tariff={nav.tariff}
                rating={nav.rating}
                deliveryTime={nav.deliveryTime}
                beforePrice={nav.priceBefore}
                afterPrice={nav.priceAfter}
            />
        )
    )
    return <div>
        <FilterResult data={props.calculate.resultCalculate} cheaper={props.updateDataCheaper} faster={props.updateDataFaster}/>
        {listBLock}
    </div>
}
export default CalculateResult