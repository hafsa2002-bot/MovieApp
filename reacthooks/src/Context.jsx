import React, {useContext, createContext, useState, useEffect} from 'react'

const Context = createContext()

export function useContextFunction(){
    return useContext(Context)
}

export function ContextProvider({children}){
    /*
    const [favoritesMovies, setFavoritesMovies] = useState(() => {
        const savedFavorites = localStorage.getItem('favoritesMovies')
        return savedFavorites ? JSON.parse(savedFavorites) : []
    })
    */
    const [favoritesMovies, setFavoritesMovies] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem('favoritesMovies')
            const parsed = savedFavorites ? JSON.parse(savedFavorites) : []
            return Array.isArray(parsed) ? parsed : []
        } catch (e) {
            console.error('Failed to parse favoritesMovies from localStorage:', e)
            return []
        }
    })

    const addToFavoritesMovies = (movie) => {
        console.log("adding to favorites movies: ", movie);
        setFavoritesMovies((prevFavorites) => {
            if (!Array.isArray(prevFavorites)) return [movie]
            const foundItem = prevFavorites.find((item) => item.id === movie.id)
            if(!foundItem){
                return [...prevFavorites, movie]
            }
            return prevFavorites
        })
    }

    // save favorites to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies))
    }, [favoritesMovies])

    return(
        <Context.Provider value={{favoritesMovies, setFavoritesMovies, addToFavoritesMovies}} >
            {children}
        </Context.Provider>
    )

}
