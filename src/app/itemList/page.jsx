import { Grid } from "@mui/material";
import './ItemList.css'
import Link from "next/link";

export default function ItemList({list}){
    return(
        <div>
            <Grid container>
                {
                    list.map((k)=>(
                        // 전체 너비를 12개로 지정하고 xs 가 3이므로 3/12 의 영역을 가진다.
                        <Grid item xs={3} key={k.id}>
                            <Link href={'/detail/'+k.id}>
                            <img src={k.image_link} alt={k.name} className="img_item"></img>
                            <strong>{k.name}</strong>
                            <span className="txt_info">{k.category} &nbsp; {k.product_type} </span>
                            <strong className="num_price">${k.price}</strong>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}