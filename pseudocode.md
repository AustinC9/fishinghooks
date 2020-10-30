*Block access to 'Submit' page untip shipping info filled out*
**have an items, Accessories,shipping, submit nav bar**
use table to display different different options
items: little boat, yacht, choice of fishing rod
Acc: big fish lure, little boy lure
Shipping:Free shipping? elon musk HyperLoop
keep submit disabled until at least items and shipping have been selected
*Keep track of what page i am currently on.*
using state to highlight Items ACC, SHip and submit
*use hooks to handle state and lifecycle*
**useState and useEffect**
*keep a running total and update as user changes their order form(initialy, the total should be 0)*
constantly update total form
*when the user clicks a service, highlight that service and add its cost to the total*
constantly update the total
*calculate sales tax*
**take total function useState to multiply total by 1.06**

const [total, setTotal] = useState(0)
const [page, setCurrentPage] = useState(0)
total = itemPrice + accPrice + Shipping
if itemPrice change itemPrice var useState

