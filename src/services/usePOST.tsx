import axios from "axios";
import { useState } from "react";
import API from "./ApiConfig";

export default function usePOST<T, V>(url: string, body: T): { data: V | null, loading: boolean, error: Error | null, fetch: () => void } {
    const [data, setData] = useState<V | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    url = API.API_URL + API.login
    const fetch = () => {
        setLoading(true)
        axios.post<T, V>(url, body)
            .then((response) => { setData(response); console.log(response) })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
        console.log(data)
    }
    return { data, loading, error, fetch }

}