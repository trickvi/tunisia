# -*- encoding: utf-8 -*-
#
# Create two Tunisian files, one budget file and another payment file
# Copyright (C) 2013  Tryggvi Björgvinsson
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

from copy import copy
from csv import reader, writer

# Values are hard coded since the file is so small.
BUDGET_FILE = open('tunisia.budget.csv', 'w')
PAYMENT_FILE = open('tunisia.payment.csv', 'w')

# CSV writers for each file
BUDGET_WRITER = writer(BUDGET_FILE)
PAYMENT_WRITER = writer(PAYMENT_FILE)

# Again, value is hard coded since the file is so small
with open('tunisia.reformat.csv') as f:
    # Indexes of the respective columns
    budget_index = None
    payment_index = None

    # Go through the rows in the input file and write to the output files with
    # the unused columns removed
    for row in reader(f):
        budget = copy(row)
        # If payment index isn't set we find it, hard coded value
        if payment_index is None:
            payment_index = budget.index('PAIEMENT')

        del budget[payment_index]
        BUDGET_WRITER.writerow(budget)

        payment = copy(row)
        # If budget index isn't set we find it, hard coded value
        if budget_index is None:
            budget_index = payment.index('BIDGET')

        del payment[budget_index]
        PAYMENT_WRITER.writerow(payment)

# Close the filesq
BUDGET_FILE.close()
PAYMENT_FILE.close()
