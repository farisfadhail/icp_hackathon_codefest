
import Text "mo:base/Text";
import Result "mo:base/Result";
import TrieMap "mo:base/TrieMap";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import Principal "mo:base/Principal";





module {
    public type Result<Ok, Err> = Result.Result<Ok, Err>;

    public type TrieMap<K, V> = TrieMap.TrieMap<K, V>;

    public type UserRequest = {
        first_name : Text;
        last_name : Text;
        email : Text;
    };

    public type User = {
        first_name : Text;
        last_name : Text;
        email : Text;
        timestamp : Time.Time;
    };

    public type Holder = {
        member : Principal;
        amount : Nat;
    };
    
    public type CompanyId = Nat64;

    public type CompanyDetail = {
        name : Text;
        city : Text;
        nation : Text;
        value : Nat;
        description : Text;
    };

    public type Company = {
        id : Nat64;
        created : Time.Time;
        creator : Principal;
        holder : [Holder];
        detail : CompanyDetail;
    };
}