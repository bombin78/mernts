import React from 'react';
import { ILink } from '../interfaces';

type LinkProps = {
    link: ILink,
}

export const LinkCard: React.FC<LinkProps> = ({link}) => {
    return (
        <>
            <h2>Ссылка</h2>
            <p>Ваша ссылка: <a href={link.to} target="_blank" rel="noopener noreferer">{link.to}</a></p>
            <p>Откуда: <a href={link.from} target="_blank" rel="noopener noreferer">{link.from}</a></p>
            <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    );
}
