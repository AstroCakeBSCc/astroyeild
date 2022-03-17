<head>
    <title>Overpowered dApp</title>
    <link rel="icon" type="image/x-icon" href="assets/op_white.png">
</head>

<body style="background-image: url('assets/background.jpg'); background-repeat: no-repeat; background-size: cover; background-position: right center;">

    <img id="mainLogo" src="assets/op_logo.png">

    <button id="walletCircle">
        <img id="walletImage" src="assets/walletSymbol.png">
    </button>
    <div id="usersWallet">Not Connected</div>

    <div id="menuDiv" style="display: block">

        <button id="btn_menu" class="menuButton menuButton_clickable">
            <img src="assets/dash_white.png" class="menuImage">
            <h2 class="menuText">Dashboard</h2>
        </button>

        <button id="btn_account" class="menuButton menuButton_clickable">
            <img src="assets/acc_white.png" class="menuImage">
            <h2 class="menuText">Account</h2>
        </button>

        <button id="btn_calc" class="menuButton menuButton_clickable">
            <img src="assets/calc_white.png" class="menuImage">
            <h2 class="menuText">Calculator</h2>
        </button>

        <button id="btn_docs" class="menuButton menuButton_clickable">
            <img src="assets/op_white.png" class="menuImage">
            <h2 class="menuText">Website</h2>
        </button>
        
    </div>

    <div id="pairAddressBlock">
        <h6 class="pairAddress">OP:&nbsp &nbsp
            <a id="pair" class="pairHref" href="https://bscscan.com" target="_blank" rel="noopener noreferrer">
                0xd51...28b
            </a>
        </h6> 
        <button class="copySquare"  id="copyToken">
            <img src="assets/copy.png" class="copyImage" id="tokenClipboard">
            <img src="assets/tick_white.png" class="copyImageTick" id="tokenTick">
        </button>

        <h6 class="pairAddress">Pair:&nbsp
            <a id="pair" class="pairHref" href="https://bscscan.com" target="_blank" rel="noopener noreferrer">
                0xC39...fB7 
            </a>
        </h6>
        <button class="copySquare"  id="copyPair">
            <img src="assets/copy.png" class="copyImage" id="pairClipboard">
            <img src="assets/tick_white.png" class="copyImageTick" id="pairTick">
        </button>
    </div>

    <div id="cryptologosbar">
        <a href="https://bscscan.com/contract/0xd51CB10cc1607e86A5def54EE3bE806A7df8528b" target="_blank" rel="noopener noreferrer" style="color: transparent">
        <img class="cryptologo" src="assets/cryptologos/bscscan.png">
        </a>

        <a href="https://t.me/OverpoweredPORTAL" target="_blank" rel="noopener noreferrer" style="color: transparent">
            <img class="cryptologo" src="assets/cryptologos/telegram.png">
        </a>

        <a href="https://twitter.com/overoverpowered" target="_blank" rel="noopener noreferrer" style="color: transparent">
        <img class="cryptologo" src="assets/cryptologos/twitter.png">
        </a>

        <a href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer" style="color: transparent">
        <img class="cryptologo tbc" src="assets/cryptologos/cmc.png">
        </a>

        <a href="https://coingecko.com" target="_blank" rel="noopener noreferrer" style="color: transparent">
        <img class="cryptologo tbc" src="assets/cryptologos/coingecko.png">
        </a>
    </div>

    <div id="homepage">

        <table class="statTable fullWidth">

            <tr>
                <td> 
                    <h4>Market Cap</h4>
                    <h3 id="marketCap">0</h3>
                </td>

                <td>
                    <h4>OP Price</h4>
                    <h3 id="tokenPrice">$0.00</h3>
                </td>

                <td>
                    <h4>Next Rebase</h4>
                    <h3 class="rebaseCountdown">00:30:00</h3>
                </td>
            </tr>

            <tr>
                <td>
                    <h4>Circulating Supply</h4>
                    <h3 id="circulatingSupply">100,000,000</h3>
                </td>

                <td>
                    <h4>Backed Liquidity</h4>
                    <h3>100%</h3>
                </td>

                <td>
                   <!-- <h4>LF</h4>
                    <h3>G</h3>-->
                </td>
            </tr>

        </table>

        <div class="statTable" id="treasuryValueBlock">
            <h4>Token Value of Treasury</h4>
            <h3 id="treasuryValue">0</h3>
        </div>

        <div class="statTable" id="poolValueBlock">
            <h4>Pool Value</h4>
            <h3 id="poolValue">$0.00</h3>
        </div>

        <div class="statTable" id="leftThirdBlock">
            <h4>Tokens in ThunderDome</h4>
            <h3 id="firePitBalance">0</h3>
        </div>

        <div class="statTable" id="middleThirdBlock">
            <h4>$ Value of ThunderDome</h4>
            <h3 id="firePitValue">$0.00</h3>
        </div>

        <div class="statTable" id="rightThirdBlock">
            <h4>% of Supply in ThunderDome</h4>
            <h3 id="percentFirePit">0%</h3>
        </div>

    </div>


    <!-- ACCOUNT -->
    <div id="account" style="display: none;">

        <table class="statTable centralWidth">

            <tr>
                <td> 
                    <h4>Your Balance</h4>
                    <h3 id="yourBalance">0</h3>
                    <h5>OP</h5>
                </td>
            </tr>
            <tr>
                <td> 
                    <h4>APY</h4>
                    <h3 id="apy">400,977%</h3>
                    <h5>Daily ROI 2.35%</h5>
                </td>
            </tr>
            <tr>
                <td> 
                    <h4>Next Rebase</h4>
                    <h3 class="rebaseCountdown">00:30:00</h3>
                </td>
            </tr>
        </table>

        <table class="statTable centralWidth" style="position: absolute; top: 520px;">

            <tr class="listRow">
                <td class="listLeft"> 
                    <h4>Current Overpowered Price</h4>
                </td>
                <td class="listRight">
                    <h3 id="accountPrice">0</h3>
                </td>
            </tr>

            <tr>
                <td class="listLeft"> 
                    <h4>Daily Reward Amount</h4>
                </td>
                <td class="listRight">
                    <h3 id="accountNextReward">0 OP</h3>
                </td>
            </tr>

            <tr>
                <td class="listLeft"> 
                    <h4>Next Day Reward USD</h4>
                </td>
                <td class="listRight">
                    <h3 id="accountNextUSD">$0.00</h3>
                </td>
            </tr>

            <tr>
                <td class="listLeft"> 
                    <h4>ROI (5-day-rate)</h4>
                </td>
                <td class="listRight">
                    <h3>11.96%</h3>
                </td>
            </tr>

        </table>

      

    </div>
 

    <!-- CALCULATOR-->
    <div id="calculator" style="display: none;">
       
        <table class="statTable fullWidth">
            <tr>
                <td> 
                    <h4>OverPowered Price</h4>
                    <h3 id="calcPrice">0</h3>
                    <h5></h5>
                </td>
                <td> 
                    <h4>Current APY</h4>
                    <h3 id="calcAPY">0</h3>
                    <h5></h5>
                </td>
                <td style="padding-top: 10px"> 
                    <h4>Your Balance</h4>
                    <h3 id="calcBalance">0</h3>
                </td>
            </tr>
        </table>

        <div class="inputBlock left" id="tokenAmountBlock">
            <h5 class="inputLabel">Token Amount</h5>
            <input class="stakeInput" id="tokenAmountInput" placeholder="0" value="0" oninput="updateSlider(-1)">
                <button class="maxCalc" id="maxSafuuAmount" onclick="maxAmount()"> MAX </button> 
         </input>
        </div>

        <div class="inputBlock right" id="APYBlock">
            <h5 class="inputLabel">APY (%)</h5>
            <input class="stakeInput" id="apyInput" placeholder="0" value="400,977" oninput="updateSlider(-1)" disabled="disabled">
              <!--  <button class="maxCalc" id="maxSafuuAmount" onclick="currentAPY()"></button> -->
            </input>
        </div>

        <div class="inputBlock left" id="tokenPricePurchaseBlock">
            <h5 class="inputLabel">OP Price at Purchase ($)</h5>
            <input class="stakeInput" id="tokenPriceInput" placeholder="0" value="0.0"  oninput="updateSlider(-1)">
                <button class="maxCalc" id="maxSafuuAmount" onclick="currentPrice()"> CURRENT </button> 
            </input>
        </div>

        <div class="inputBlock right" id="tokenPriceFutureBlock">
            <h5 class="inputLabel">Future OP Price ($)</h5>
            <input class="stakeInput" id="tokenPriceFutureInput" placeholder="0" value="0.0" oninput="updateSlider(-1)">
                <button class="maxCalc" id="maxSafuuAmount" onclick="currentFuture()"> CURRENT </button> 
            </input>
        </div>

        <div class="slidecontainer">
            <h2 id="selectedRange">1 day</h2>
            <input type="range" min="1" max="100" value="1" class="slider" id="myRange" oninput="updateSlider(this.value)">
        </input> 
            <h4 class="calc_left" style="top:80px">Your Initial Investment ($)</h4>
            <h4 class="calc_right" style="top:80px" id="calc_initial">$0.00</h4>

            <h4 class="calc_left" style="top: 120px">OP Rewards Estimation</h4>
            <h4 class="calc_right" style="top: 120px" id="calc_rewards">0</h4>

            <h4 class="calc_left" style="top: 160px">Potential Return ($)</h4>
            <h4 class="calc_right" style="top: 160px" id="calc_return">$0.00</h4>

          </div>

    </div>
    <script src="obcss.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
    <script src="dapp.js"></script>
</body>
