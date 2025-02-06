const resultStyle = {
  lg: {
    inline: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 2.5,
      marginLeft: 5,
      color: '#607d8b',
      alignItems: 'right',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 10,
      borderRadius: 5,
      borderColor: 'grey',
      borderWidth: 1,
      paddingVertical: 2.5,
    },
    bottomContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: '8px',
      gap: '12px'
    },
    time: {
      color: '#607D8B',
      fontSize: '0.875rem'
    },
    price: {
      color: '#fff',
      fontWeight: 'bold',
    },
    priceContainer: {
      backgroundColor: '#ff6721',
      padding: 3,
      borderRadius: 5,
      display: 'inline-block',
    },
    icon: {
      fontSize: 'xx-large',
      margin: '0 2px',
    },
    car: {
      width: 27,
      height: 27,
      margin: '0 5px',
    },
    arrow: {
      fontSize: 'large',
      verticalAlign: 'text-bottom',
      margin: '0 2px',
    },
    transportIcons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: '8px',
    },
    sortMenu: {
      paddingLeft: '24px',
    },
    airplaneBox: {
      padding: '0 2,5px',
    },
    airplaneIcon: {
      fontSize: 24,
      color: '#607D8B',
    },
    routeCard: {
      marginTop: '20px',
    },
    italicFont: {
      fontStyle: 'italic',
      padding: '0 2px',
    },
    arrowStyle: {
      verticalAlign: 'text-bottom',
      padding: '0 2px',
    },
    btnByTicket: {},
    routeContainer:{
      display:'flex',
      flexDirection:'column',
      width: '100%'
    },
    regularFont:{
      fontStyle: 'italic',
      fontSize:'1rem',
      padding: '0 2px',
    },
  },
  sm: {
    inline: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 2,
      marginLeft: 5,
      color: '#607d8b',
      alignItems: 'baseline',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 4,
      borderRadius: 5,
      borderColor: 'grey',
      borderWidth: 1,
      paddingVertical: 2.5,
      fontSize: '0.8rem'
    },
    bottomContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginRight: 13,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 4,

      fontSize: '1rem',
      marginTop: 8
    },
    time: {
      color: 'black',
      marginLeft: 8,
      fontSize: '1rem',
      fontWeight:400
    },
    price: {
      color: '#fff',
      fontSize: '1rem',
    },
    priceContainer: {
      backgroundColor: '#ff6721',
      padding: '4px 8px 4px 8px',
      borderRadius: '0 5px 0 5px',
      display: 'inline-block',
      marginLeft: '-16px',

    },
    icon: {
      margin: 0,
    },
    car: {
      width: 22,
      height: 22,
      margin: '0 5px',
    },
    arrow: {
      fontSize: 'medium',
      verticalAlign: 'text-top',
      margin: 0,
    },
    transportIcons: {

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    sortMenu: {
      paddingLeft: '24px',
    },
    airplaneBox: {
      padding: '0 2,5px',
    },
    airplaneIcon: {
      fontSize: 24,
      color: '#607D8B',
    },
    routeCard: {
      marginTop: '70px',
    },
    italicFont: {
      fontStyle: 'italic',
      padding: '0 2px',
    },
    regularFont:{
      fontStyle: 'default',
      fontSize:'0.9rem',
      padding: '0 2px',
    },
    arrowStyle: {
      verticalAlign: 'text-bottom',
      padding: '0 2px',
    },
    btnByTicket: {},
    routeContainer:{
      display:'flex',
      flexDirection:'column'
    }
  },
};
const resultItemStyle = {
  lg: {
    itemContainer: {
      width: '97%',
      backgroundColor: 'rgb(255, 251, 255)',
      borderTopWidth: 0,
      borderWidth: 1,
      borderColor: 'rgb(119, 87, 80)',
      borderTopStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
    directions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 3,
      paddingTop: 3,
    },
    boldText: {
      fontWeight: 'bold',
    },
    buyTicket: {
      borderWidth: 1,
      borderRadius: '2',
      borderColor: '#ff6721',
      fontSize: '12px',
      padding: '13px 7px',
      margin: '0 2px',
      color: 'rgb(10,4,3)',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    price: {
      color: 'rgb(10,4,3)',
    },
    icon: {
      color: '#607d8b',
      verticalAlign: 'text-bottom',
    },
    car: {
      zIndex: 100,
      width: 20,
      height: 20,
      alignSelf: 'center',
      backgroundColor: 'white',
      marginLeft: 5,
      verticalAlign: 'text-bottom',
    },
    time: {
      color: 'rgb(119, 87, 80)',
    },
    iconText: {
      textAlign: 'right',
    },
    arrowStyle: {
      verticalAlign: 'text-bottom',
      padding: '0 2px',
    },
  },
  sm: {
    itemContainer: {
      width: '100%',
      backgroundColor: 'rgb(255, 251, 255)',
      borderTopWidth: 0,
      borderWidth: 1,
      borderColor: 'rgb(119, 87, 80)',
      borderTopStyle: 'solid',
      padding: '.5rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    directions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 3,
      alignItems: 'center',
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: '0.8rem',
    },
    directionText: {
      display: 'flex',
      alignItems: 'center',
    },
    buyTicket: {
      borderWidth: 1,
      borderColor: '#ff6721',
      fontSize: '10px',
      fontWeight: 'normal',
      padding: '7px 15px',
      margin: '0 2px',
      color: '#fff',
      backgroundColor: '#ff6721',
      textTransform: 'capitalize',
    },
    price: {
      color: 'rgb(10,4,3)',
    },
    icon: {
      color: '#607d8b',
      verticalAlign: 'text-bottom',
    },
    car: {
      zIndex: 100,
      width: 18,
      height: 18,
      alignSelf: 'center',
      backgroundColor: 'white',
      marginLeft: 5,
      verticalAlign: 'text-bottom',
    },
    time: {
      color: 'rgb(119, 87, 80)',
      fontSize: '0.8rem',
    },
    iconText: {
      fontSize: '0.8rem',
      textAlign: 'right',
    },
    inLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    arrowStyle: {
      verticalAlign: 'text-bottom',
      padding: '0 2px',
    },
    resultStyleBottom: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
};
export { resultStyle, resultItemStyle };
