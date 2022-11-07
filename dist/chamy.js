
show = document.all


function iterate(z, text) {
    for (k = 0; k < text.length; k++) {
        for (i = 0; i < z.length; i++) {
            if (z[i].className.length > 1) {
                if (z[i].classList.value) {
                    for (x = 0; x < z[i].className.split(" ").length; x++) {
                        if (text[k] == "typo-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.fontSize = lll[1]
                            }
                        }

                        if (text[k] == "pd-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.padding = lll[1]
                            }
                        }

                        if (text[k] == "mg-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.margin = lll[1]
                            }
                        }

                        if (text[k] == "bg-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.backgroundColor = lll[1]
                            }
                        }
                        if (text[k] == "fg-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.color = lll[1]
                            }
                        }

                        if (text[k] == "d-rl") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                // lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.direction = "rtl"
                            }
                        }

                        if (text[k] == "d-lr") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                // lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.direction = "ltr"
                            }
                        }

                        if (text[k] == "bd-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.border = lll[1]
                                z[i].style.borderStyle = "solid"
                            }
                        }
                        if (text[k] == "bd-color-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.borderColor = lll[2]
                                
                            }
                        }

                        if (text[k] == "bd-styl-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.borderStyle = lll[2]
                                
                            }
                        }

                        if (text[k] == "bd-rd-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(6, 50)
                                z[i].style.borderRadius = fnd
                                // z[i].style.borderStyle = "none"
                                
                                
                                
                            }
                        }
                        if (text[k] == "bd-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.border = "none";
                                
                            }
                        }

                        if (text[k] == "pd-l-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.paddingLeft = lll[2]
                                
                            }
                        }

                        if (text[k] == "ln-h-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.lineHeight = lll[2]
                                
                            }
                        }

                        if (text[k] == "pd-r-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.paddingRight = lll[2]
                                
                            }
                        }
                        if (text[k] == "pd-t-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.paddingTop = lll[2]
                                
                            }
                        }
                        if (text[k] == "pd-b-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.paddingBottom = lll[2]
                                
                            }
                        }
                        if (text[k] == "mg-l-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.marginLeft = lll[2]
                                
                            }
                        }

                        if (text[k] == "mg-r-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.marginRight = lll[2]
                                
                            }
                        }
                        if (text[k] == "mg-t-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.marginTop = lll[2]
                                
                            }
                        }
                        if (text[k] == "mg-b-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                z[i].style.marginBottom = lll[2]
                                
                            }
                        }

                        if (text[k] == "mg-hr-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.marginLeft = "0"
                                z[i].style.marginRight = "0"
                                
                            }
                        }

                        if (text[k] == "mg-vr-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.marginTop = "0"
                                z[i].style.marginBottom = "0"
                                
                            }
                        }

                        if (text[k] == "mg-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.margin = "0"
                                
                            }
                        }

                        if (text[k] == "pd-hr-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.paddingLeft = "0"
                                z[i].style.paddingRight = "0"
                                
                            }
                        }

                        if (text[k] == "pd-vr-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.paddingTop = "0"
                                z[i].style.paddingBottom = "0"
                                
                            }
                        }

                        if (text[k] == "pd-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.padding = "0"
                             
                            }
                        }

                        if (text[k] == "dis-blk") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.display = "block"
                              
                            }
                        }
                        if (text[k] == "dis-iblk") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.display = "inline-block"
                       
                            }
                        }
                        if (text[k] == "dis-flx") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.display = "flex"
                               
                            }
                        }
                        if (text[k] == "dis-gd") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.display = "grid"
                               
                            }
                        }
                        if (text[k] == "dis-tb") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                z[i].style.display = "table"
                                
                            }
                        }

                        if (text[k] == "flx-b-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(6, 50)
                                z[i].style.flexBasis = fnd
                                
                                
                            }
                        }
                        if (text[k] == "flx-f-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(6, 50)
                                z[i].style.flexFlow = fnd
                                
                                
                            }
                        }

                        if (text[k] == "flx-g-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(6, 50)
                                z[i].style.flexGrow = fnd
                                
                                
                            }
                        }

                        if (text[k] == "flx-d-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(6, 50)
                                z[i].style.flexDirection = fnd
                                
                                
                            }
                        }

                        if (text[k] == "gp-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                    lll = z[i].className.split(" ")[x].split("-")
                                    z[i].style.gap = lll[1]
                                }
                            }
                        }

                        if (text[k] == "ftr-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                    lll = z[i].className.split(" ")[x].split("-")
                                    z[i].style.filter = lll[1]
                                }
                            }
                        }


                        if (text[k] == "flx-w-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(6, 50)
                                z[i].style.flexWrap = fnd
                                
                                
                            }
                        }

                        if (text[k] == "jcnt-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.justifyContent = fnd
                                
                                
                            }
                        }
                        if (text[k] == "acnt-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.alignContent = fnd
                                
                                
                            }
                        }

                      

                        if (text[k] == "aslf-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.alignSelf = fnd
                                
                                
                            }
                        }

                        if (text[k] == "aitm-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.alignItems = fnd
                                
                                
                            }
                        }

                        if (text[k] == "typo-c") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.textAlign = "center"

                            }
                        }

                        if (text[k] == "typo-l") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.textAlign = "left"

                            }
                        }

                        if (text[k] == "typo-r") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.textAlign = "right"

                            }
                        }

                        if (text[k] == "typo-j") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.textAlign = "justify"

                            }
                        }

                        if (text[k] == "typo-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                               
                                z[i].style.fontWeight = lll[1]

                            }
                        }

                        if (text[k] == "typo-styl-i") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.fontStyle = "italic"
                                
                                
                            }
                        }

                        if (text[k] == "typo-styl-b") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.fontStyle = "bold"
                                
                                
                            }
                        }

                        if (text[k] == "w-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                          
                                z[i].style.width = lll[1]

                            }
                        }

                        if (text[k] == "h-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                            
                                z[i].style.height = lll[1]

                            }
                        }

                        if (text[k] == "mx-w-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.maxWidth = fnd
                                
                                
                            }
                        }

                        if (text[k] == "mx-h-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.maxHeight = fnd
                                
                                
                            }
                        }


                        if (text[k] == "mi-w-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.minWidth = fnd
                                
                                
                            }
                        }

                        if (text[k] == "mi-h-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(5, 50)
                                z[i].style.minWidth = fnd
                                
                                
                            }
                        }



                        if (text[k] == "mg-pushl") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.marginLeft = "auto"

                            }
                        }

                        if (text[k] == "mg-pd-clear") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.margin = "0"
                                z[i].style.padding = "0"

                            }
                        }

                        if (text[k] == "mg-pushr") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {

                                z[i].style.marginRight = "auto"

                            }
                        }

                        if (text[k] == "cln-gp-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(7, 50)
                                z[i].style.columnGap = fnd
                                
                                
                            }
                        }

                        if (text[k] == "od-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")
                                
                                z[i].style.order = lll[1]
                                
                                
                            }
                        }

                        if (text[k] == "rw-gp-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(7, 50)
                                z[i].style.rowGap = fnd
                                
                                
                            }
                        }

                        if (text[k] == "gd-tplt-rws") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(12, 50)
                                z[i].style.gridTemplateRows = fnd
                                
                                
                            }
                        }

                        if (text[k] == "gd-tplt-cns") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(12, 50)
                                z[i].style.gridTemplateColumns = fnd
                            }
                        }

                        if (text[k] == "gd-auto-rws") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x]
                                fnd = lll.substring(12, 180)
                                z[i].style.gridAutoRows = fnd
                              
                                
                            }
                        }

                        if (text[k] == "gd-cln-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")[2]
                                fnd = lll.substring(12, 180)
                                z[i].style.gridColumn = lll
                            }
                        }

                        if (text[k] == "gd-rw-") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                lll = z[i].className.split(" ")[x].split("-")[2]
                                fnd = lll.substring(12, 180)
                                z[i].style.gridRow = lll
                            }
                        }

                        if (text[k] == "font-global") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                
                                z[i].style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                            }
                        }

                        if (text[k] == "rm-dot") {
                            if (!z[i].className.split(" ")[x].indexOf(text[k])) {
                                
                                z[i].style.listStyleType = "none"
                                
                            }
                        }

                        

                        

                    }
                }
            }
        }
    }
}


styles = [

    "fg-", "bg-", "bd-", "bd-color-",
    "bd-clear", "pd-l-", "pd-r-", "pd-t-", "pd-b-",
    "mg-l-", "mg-r-", "mg-t-", "mg-b-", "mg-hr-clear",
    "mg-vr-clear", "mg-clear",
    "pd-hr-clear", "pd-vr-clear", "pd-clear","ln-h-",
    "dis-gd", "dis-flx", "dis-blk", "dis-iblk", "dis-tb", "flx-b-",
    "flx-d-", "flx-f-", "flx-g-", "flx-w-", "jcnt-", "acnt-","flx-od-",
    "typo-l", "typo-j", "typo-c", "typo-r", "typo-","ftr-",
    "typo-styl-i", "typo-styl-b", "w-", "h-", "mx-w-", "mx-h-", "mi-w-", "mi-h-","bd-styl-",
    "aslf-", "aitm-", "mg-pushl", "mg-pushr", "cln-gp-", "rw-gp-", "gp-", "bd-rd-", "od-",
    "gd-tplt-cns","gd-tplt-rws","gd-cln-","gd-rw-","mg-pd-clear","d-lr","d-rl","rm-dot","pd-","mg-","font-global"
    


]

iterate(show,styles)
