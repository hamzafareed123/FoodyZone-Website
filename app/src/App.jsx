import styles from 'styled-components'
import { useState,useEffect } from 'react'
import logo from './images/Foody.svg'
import SearchFood from './SearchFood'


const App = () => {
  

  const BASE_URL= 'http://localhost:9000';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState(null);
  const [filterData, setFilterData] =useState(null);
  const [button, setButton] =useState('all');

  useEffect(()=>{
    const FetchData = async ()=>{

      setLoading(true);
      try{
  
      const response= await fetch(BASE_URL);
  
      const jsondata= await response.json()
      setData(jsondata);
      setFilterData(jsondata);
      setLoading(false)
  
      }catch(error){
        setError("Unable to Fetch Data");
      }
    }
    FetchData();

  },[])

    if(error) return <div>{error}</div>
    if(loading) return <div>Loading....</div>

    const searchFood=(e)=>{
      const value= e.target.value;

      if(value==='null'){
        setFilterData(data)        
      }

      const filter=data?.filter((food)=>food.name.toLowerCase().includes(value.toLowerCase()))

      setFilterData(filter);
     }

     const searchButton =(type)=>{
    
      if(type ==='all'){
        setFilterData(data);
        setButton('all');
        return;
      }

      const filteredData = data?.filter((food) =>
        food.type.toLowerCase() === type.toLowerCase())
        setFilterData(filteredData);
        setButton(type);

     }

     const filterBtn= [
      {
        name:'All',
        type:'all'
      },
      {
        name:'BreakFast',
        type:'breakfast'
      },
      {
        name:'Lunch',
        type:'lunch'
      },
      {
        name:'Dinner',
        type:'dinner'
      }
     ]
  
  return (
    <>
    <Container>

      <TopContainer>

        <div className='logo'>
          <img src={logo} alt='logo'></img>
        </div>

        <div className='search w-full '>
          <input
          type='text'
          placeholder='Search Food'
          onChange={searchFood}
          ></input>
        </div>

      </TopContainer>  

      <FilterContainer>
        <div className='filter-btn'>
          {filterBtn.map((value)=>
             <Button isSelected={button === value.type}
             key={value.name} onClick={()=>searchButton(value.type)}>
            {value.name}
          </Button>)}
        </div>
      </FilterContainer>

      <SearchFood data={filterData}/>
    </Container>
    </>
  )
};

export default App;

const Container = styles.div`
  background: #5A5959;
  min-width: 1200px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-width: unset;
    padding: 0 20px;
  }
`;

const TopContainer = styles.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin: 0px 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .search {
    input {
      background-color: transparent;
      padding: 10px;
      color: white;
      font-size: 16px;
      border: 1px solid #69231e;
      border-radius: 5px;
      font-weight: 700;
      width: 300px;

      &::placeholder{
      color:white;
      }

      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

const FilterContainer = styles.section`
  display: flex;
  justify-content: center;
  .filter-btn {
    display: flex;
    gap: 10px;
    padding-bottom: 40px;
    flex-wrap: wrap; /* Wrap buttons for small screens */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button= styles.button`
background-color:${({isSelected})=> (isSelected ? '#69231e' : '#69231e')};
outline:1px solid ${({isSelected})=> (isSelected ? 'white' : '#69231e')};
padding:10px 15px;
border: 1px solid transparent;
border-radius:5px;
color:white;
border:none
font-size:18px
cursor:pointer;
transition:all 0.3s ease;

 min-width: 100px; /* Add a minimum width */

  @media (max-width: 480px) {
    font-size: 16px; /* Adjust font size for mobile */
    padding: 8px 12px;


  &:hover{
border:1px solid white;
}
`

