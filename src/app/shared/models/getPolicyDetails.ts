export interface GetPolicyDetailsInteface {
    polcom: Polcom[];
    codes:  Code[];
    errors: null;
}

export interface Code {
    tbl_Name:  string;
    code:      string;
    eng_Full:  string;
    repl_With: string;
}

export interface Polcom {
    product:           string;
    grpCode:           string;
    pol_serno:         number;
    holderName:        string;
    productName:       string;
    insPIN:            number;
    policyNo:          string;
    policy_No:         number;
    agt_code:          string;
    firstInception:    Date;
    inception:         Date;
    expiry:            Date;
    claimDetail:       boolean;
    claimPrevYears:    number;
    net_Frq:           number;
    cur_Code:          null;
    pay_Mode:          string;
    pay_Frq:           string;
    contractYr:        string;
    contractPrd:       string;
    paymentYr:         string;
    paymentPrd:        string;
    paymentExpiry:     string;
    contractLabel:     string;
    paymentLabel:      string;
    status_Code:       null;
    agt_Phone:         string;
    agt_Email:         string;
    firstLifeInsured:  string;
    secondLifeInsured: string;
    firstInsLbl:       string;
    secondInsLbl:      string;
    creditCardNo:      string;
    cardExpiry:        string;
    baS_Policy:        string;
    poS_Policy:        string;
    payerName:         string;
    creditCardlbl:     string;
    legalAddress:      string;
    gCondRef:          string;
    polLang:           string;
    sendSms:           string;
    pH_Phone:          string;
    pH_eMail:          string;
    policyYr:          string;
    printCS:           string;
    grpPolicy:         boolean;
    converT_DATA:      string;
}
