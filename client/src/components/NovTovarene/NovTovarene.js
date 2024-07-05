import style from "./novTovarene.module.css"

export const NovTovarene = () => {

    return(
        <section className={style["main-section"]}>
            <div className={style["registration-form"]}>
	            <div className={style['fieldset']}>
                    <legend>Wanna be Cool?!</legend>
                        <form method="post" >
                            <div className={style['row']}>
                                <label >Номер на линията: </label>
                                <input type="text"  name='numberOfLine' data-required="true" />
                            </div>
                            <div className={style['row']}>
                                <label>Име на линията: </label>
                                <input type="text"  name='nameOfLine' data-required="true" />
                            </div>
                            <div className={style['row']}>
                                <label>Шофьор: </label>
                                <input type="text" name='driver' data-required="true" />
                            </div>
                            <input type="submit" value="Confirm" />
                        </form>
                    </div>
                </div>
        </section>
    )
}