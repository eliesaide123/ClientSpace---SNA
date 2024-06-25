export interface GetClientInfo {
    polcom: Polcom[];
    errors: null;
}

export interface Polcom {
    pol_serno:     any;
    policyType:    string;
    policyNo:      string;
    productName:   string;
    holderName:    string;
    inception:     Date;
    expiry:        Date;
    status_Code:   string;
    orderBy:       number;
    certNo:        number;
    pay_Frq:       string;
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
