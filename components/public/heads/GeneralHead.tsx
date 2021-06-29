import Head from 'next/head'
import mainTitle from '../../../configs/mainTitle';

const GeneralHead = ({title} : {
    title: string | undefined
}) => {
    

    return (
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <title>{
                    title
                }</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
    );
}
GeneralHead.defaultProps = {
    title: ''
}
export default GeneralHead;
