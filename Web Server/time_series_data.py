import pandas as pd
from datetime import date

# 5.23 ~ 6.15
snp500 = [4145.58, 4115.24, 4151.28, 4205.45, 4205.52, 4205.52, 4205.52, 4205.52, 4179.83, 4221.02, 4282.37, 4279.37,
       4276.37, 4273.79, 4283.85, 4267.52, 4293.93, 4298.86, 4298.86, 4298.86, 4338.93, 4369.01, 4372.59, 4425.84]

nasdaq100 = [13672.54, 13604.48, 13938.53, 14298.41, 14298.41, 14298.41, 14298.41, 14354.99, 14254.09, 14441.51, 14546.64,
              14546.64, 14546.64, 14556.50, 14558.09, 14303.29, 14484.54, 14528.36, 14528.36, 14528.36, 14784.30, 14900.85, 15005.69, 15185.48]

datelist = [stamp.date() for stamp in pd.date_range(date(2023, 5, 23), date(2023, 6, 15))]
