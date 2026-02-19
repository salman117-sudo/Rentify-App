import RentalCard from "./RentalCard";

const rentals = [
  {
    id: 1,
    title: "Urban Oasis Studio",
    price: 145,
    rating: 4.9,
    location: "SOMA, San Francisco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTT8Vfm4bpmbx0e1OWol4ot2w_cfRZ7NSMvxt5A3GRCLYGqUditu4YDTGoDJgxj-NeurmJkm6Rva6YlI5VmVAuLJ6sAqXdkI7Kes60xL7iJGUbtpe3WZjFjas_yZUpUQpDoXrN_pNI-dBpRRaR9OsumYh7mW783BXdpCNeI_XDDaaAbZLxK3jc21M2KWrR8iQTUv32Au_DzMJFOczyCWG78Oivuvo0PhVRWjrYuXR-_CBHklmuReC5XGmc5GEXrCYR7R6SEq_dgH9D"
  },
  {
    id: 2,
    title: "Custom Shadow Bobber",
    price: 85,
    rating: 4.8,
    location: "Mission District, SF",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGr6c1ETQVhGDlr9kv4SKD7Bs37QNdbOF-OgjGvHqsKAohe6BbAitV-iaKwqPEwvv47lpbRHlC4gjxGKGKeCzbIxoxtJfJo26rkVhOthzFopUeh3yPAA4Ji5Tl7SazDUr60-iXDrNxI4cWZgbhJFkX9iPl2iJ16kELTAfxRw2hEwc83L4UFRZ282hWGqc2-2m8iFs5WhIJsntSTPr7KefDmINKtM-PMbB9mav4gVJOubqFBSB2a9tb6e0Vg4tpIaEEvxhr3ceKEzIe"
  },
  {
    id: 3,
    title: "Cannondale Trail SE 4",
    price: 45,
    rating: 4.7,
    location: "Golden Gate Park, SF",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlciD8MQYmSYoF5OckO7mv2COtE8Ly4VNGEcBIqW9LPuNLUTrNTMe2SQOLvLjSNNfTfQkU5T9hkSayCgp4INXu7Qel6rpBhL2c-D5w4BhTuIFwJ870Qss6LR65NaGLHGN8G6dfBzOguQ_eytc2nctgzk9oSE6nJ7coG5lGq3MFy_SdFl_sfizvdEAgONtIwo5djADqdpQ0Z2AyVL2Xg6ZgmvpU3rd7I1mZfjjQsFjMI_v4FjVR47VtwFUNnUGVD9Qvxf5dZwEC4Qtx"
  },
  {
    id: 4,
    title: "Tesla Model 3 Long Range",
    price: 110,
    rating: 5.0,
    location: "Union Square, SF",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVX9m854ABeTAncQYkjCuhlFFZLmdXUED0B4pLYb92yE6M6Y943EUWZLWmfqW8hT7cvhBWb6LKMW3sHoD5xKNUGqvxHLlciIbFAThVw_PUKd4ewbpYERLTNkVJ8dWi2nHP2Nj6bmxf76GewxfaTGg4XPVKQkldUO3YB1F7hqbeNjOyuYEl2TONq2CRIlvOqeUEOm-oP8KtzJ1qoSizZgO-KBDIBchzrURazDyqisogDJJrO8lC2RzQEN5--qVfjWSEDwWDv_Kq7AMw"
  },
  {
    id: 5,
    title: "Nob Hill Guest Suite",
    price: 190,
    rating: 4.9,
    location: "Nob Hill, San Francisco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB61Tk5bSxxjL4p5OoJtpEXEjDjPiawWD9Xa_MXA3a4ImnqUaexZThMG6SRjTYF9bkisCi2kSECncMYXfRFIpwO2h7YcHwsS1T2rcQ7Gi5f2VHjTIxicPSjHUBqQQ6tXUZo0-q2tQbwGHaJtgSWvuEjVaWqaJDn1XAvAeF_NDVQy6C1KBs0QEtW3I7yRg6OvNho8iaL-nqiZZ3fMqIGP083JoUEWwaI-5p1hd0obZ8MVfmgxANgPbtnkt08f5w0Xy54_-KxcLsLfap5"
  },
  {
    id: 6,
    title: "NIU NQi Sport Scooter",
    price: 28,
    rating: 4.8,
    location: "Hayes Valley, SF",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjcNn1A8qxw-axWL464UeEJmhBmOn4i5fkNoGhMiItp2f12fWd9VVMpGTb7fIfU3w-MNK_fJG16Uzl3ydjC0dv9F9Rfiw5GF3vj9eTju6WPrwsIlDeZIrN0bdXhse-Bd1DdC1EJPC92bSnyIgYIY8tTAAIi1JqCnkIOjVmLvmNLmwQNqq0-z2Ox-iIh-vuf1d-snzb5k6jjC8lyOtVBwVXpiWWUycGqg6WHwOxcpnckZ3LVAZhCxkxtuUbSjZFoDieiu-XRjE8hcHr"
  }
];

export default function ExploreGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {rentals.map((item) => (
        <RentalCard key={item.id} rental={item} />
      ))}
    </div>
  );
}
