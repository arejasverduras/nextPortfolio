import styles from './PageLayout.module.css';
// deps
import { useState } from 'react';
// components
import { Input } from '../Input/Input';
import { Hints } from '../Hints/Hints';

export default function PageLayout({children}:any) {
    const [visible, setVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                    <div className={styles.logo}>
                        bla
                    </div>
                    <Input 
                        startOpen
                        visible={visible}
                        toggleVisible={()=>{setVisible(!visible)}}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        />
                    <Hints 
                        visible={true}
                        setSearchTerm={setSearchTerm}
                        />
                </div>
                <main>{children}</main>
        </div>
    )
}
