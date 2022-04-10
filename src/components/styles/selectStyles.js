export const selectStyles = {
    control: (styles) => ({
        ...styles, 
        backgroundColor: '#2A2F45',
        maxWidth: '510px',
        height: '56px',
        color: '#8A91AB',
        borderRadius: '2px',
        border: 'none',
        margin: '80px auto 0px',
        cursor: 'text',
    }),
    option: (styles) => {
        return {
        ...styles,
        backgroundColor: '#30354B',
        color: '#fff',
        width: '510px',
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: '10',
        borderBottom: '2px solid #161B30',
        borderRadius: '5px'
    }},
    input: (styles) => ({ ...styles, color: '#8A91AB' }),
    menu: (styles) => ({
        width: '510px',
        height: '0px',
        margin: '0px auto',
    }),
    menuList: (styles) => ({
        ...styles,
        "::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
          },
    }),
    dropdownIndicator: (styles) => ({
        display: 'none'
    }),
    indicatorSeparator: (styles) => ({
        display: 'none'
    }),
    singleValue: (styles) => ({
        ...styles,
        color: '#fff'
    }),
    noOptionsMessage: (styles) => ({
        display: 'none'
    })
}