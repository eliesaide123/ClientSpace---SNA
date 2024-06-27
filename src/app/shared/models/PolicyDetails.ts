export interface PolicyDetails {
    polcom:         Polcom[];
    page_Direction: string;
    errors:         null;
}

export interface Polcom {
    pol_serno:     number;
    policyType:    string;
    policyNo:      string;
    productName:   string;
    holderName:    string;
    inception:     Date;
    expiry:        Date;
    status_Code:   string;
    orderBy:       number;
    certNo:        number;
    pay_Frq:       null;
    total_Premium: number;
    cur_Code:      string;
    tabs:          string;
    template:      string;
    asAgreed:      string;
    hasRequest:    boolean;
    hasFresh:      boolean;
    disable_View:  boolean;
    openCover:     boolean;
    converT_DATA:  string;
}
