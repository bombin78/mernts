import React, {useEffect, useCallback, useContext, useState} from 'react';
import {useHttp} from '../hooks/http.hook';
import {AuthContext} from '../context/AuthContext';
import {Loader} from '../components/Loader';
import {LinksList} from '../components/LinksList';
import {ILink} from '../interfaces';

export const LinksPage: React.FC = () => {
    const [links, setLinks] = useState<ILink[]>([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`,
            });
            setLinks(fetched);
        } catch(e) {}
    }, [token, request]);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks])

    if(loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && <LinksList links={links}/>}
        </>
    );
}
