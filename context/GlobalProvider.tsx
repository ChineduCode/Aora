import { useContext, useReducer, createContext, useEffect, ReactNode, Dispatch } from "react";
import { getCurrentUser } from "@/lib/appwrite";

type User = {
    username: string,
    email: string
} | null | any

interface State {
    isLoggedIn: boolean,
    user: User,
    isLoading: boolean
}

type Action = 
    | { type: 'IS_LOGGED_IN', payload: boolean }
    | { type: 'USER', payload: User }
    | { type: 'IS_LOADING', payload: boolean }

const globalReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case 'USER':
            return {
                ...state,
                user: action.payload
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

interface GlobalContextType {
    state: State,
    dispatch: Dispatch<Action>
}

const initialState: State = {
    isLoggedIn: false,
    isLoading: true,
    user: {
        email: '',
        username: ''
    }
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: Readonly<{children: ReactNode}>) => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState);

    useEffect(() => {
        getCurrentUser()
            .then(res => {
                if(res){
                    dispatch({ type: 'IS_LOGGED_IN', payload: true })
                    dispatch({ type: 'USER', payload: res })

                } else {
                    dispatch({ type: 'IS_LOGGED_IN', payload: false })
                    dispatch({ type: 'USER', payload: null })
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=> dispatch({ type: 'IS_LOADING', payload: false }))
    },[]);

    return(
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error('Global Context must be used within Global Provider')
    }

    return context;
}
