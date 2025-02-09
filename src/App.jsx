import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Cover from './Components/Cover/Cover'
import Footer from './Components/Footre/Footer'
import Header from './Components/Header/Header'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  const [coins, setCoins] = useState(0);
  let coin = 10000000000;
  const coinHandel = () => {
    setCoins(previousCoin => previousCoin + coin)
    toast.success(`Successfully Clam ${coin}`)
  }

  const [selectPlayers, setSelectPlayers] = useState([])

  const [decreesLength, setDecreesLength] = useState(0);

  const [idAdd, setIdAdd] = useState([])

  const buyHandel = (player) => {
    const {id, name, price, } = player

    if (idAdd.includes(id)) {
      toast.error(`${name} All ready Select`)
       return
    }

    if (selectPlayers.length >= 6) {
      toast.error(`${name} You Can't select more then 6 player`)
      return
    }


    if (price <= coins) {
      let availableCoin = coins - price;
      setCoins(availableCoin)
      toast.success(`Successfully buy ${name}`)
      setSelectPlayers([...selectPlayers, player])
      setDecreesLength(selectPlayers.length)
      setIdAdd([...idAdd, id])
      
    }
    else {
      toast.error(`you have'nt Enough Money ${price}`)
    }

  }
  


  const deleteHandel = (playerSelected) => {
    const removeItem = selectPlayers.filter(players => playerSelected.id !== players.id)
    setSelectPlayers(removeItem)
    const removeId = removeItem.map(item => item.id );
    setIdAdd(removeId)
    toast.warning(`You have successfully remove ${playerSelected.name}`)
  }

  const [isSelected, setSelected] = useState(false);

  return (
    <>
      <Header coins={coins}></Header>
      <Cover coinHandel={coinHandel} ></Cover>
      {
        !isSelected ? <AvailablePlayers decreesLength={decreesLength}  selectPlayers={selectPlayers} setSelected={setSelected} buyHandel={buyHandel}></AvailablePlayers> : <SelectedPlayers deleteHandel={deleteHandel} setSelected={setSelected} selectPlayers={selectPlayers}></SelectedPlayers>
      }
      <Subscribe></Subscribe>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </>
  )
}

export default App
