const productDesc = [ {
    name: 'test1',
},
{
    name: 'test2'
},
{
    name: 'test3'
},
{
    name: 'test4'
},
{
    name: 'test5'
},
{
    name: 'test6'
}
]


export default function Product() {
    return(
        <>
        <div className=" grid grid-cols-3 grid-rows-2 h-[600px]">
            {productDesc.map(function(data) {
                return (
                    <div key={data.name}>
                    <div className='border-4 p-8 w-fit'>
                        {data.name}
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}

