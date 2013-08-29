# -*- encoding: utf-8 -*-
#
# wrangle.py - Data wrangling from the command line
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

import argparse
from csv import reader, writer

def wrangle(inputfile, outputfile='output.csv',
            skips=[], filters={}, increment=None):

    skip_idx = []
    filter_idx = {}
    inc_field = increment

    with open(outputfile, 'w') as outfile:
        csvwriter = writer(outfile)
        
        with open(inputfile) as infile:
            csvreader = reader(infile)

            headers = csvreader.next()
            for column in skips:
                skip_idx.append(headers.index(column))
            for key,value in filters.iteritems():
                filter_idx[headers.index(key)] = value

            skip_idx.sort()
            skip_idx.reverse()

            for idx in skip_idx:
                del headers[idx]

            if inc_field is not None:
                headers.insert(0, 'id')

            csvwriter.writerow(headers)
            
            for row in csvreader:
                add_row = reduce(
                    lambda x,y: x and (row[y] == filter_idx[y]),
                    filter_idx.keys(), True)

                if not add_row:
                    continue

                for idx in skip_idx:
                    del row[idx]

                if inc_field is not None:
                    row.insert(0, inc_field)
                    inc_field += 1
                
                csvwriter.writerow(row)

def parse_commandline():
    parser = argparse.ArgumentParser()
    parser.add_argument('-o', '--output')
    parser.add_argument('-a', '--auto-increment', type=int)
    args, rest = parser.parse_known_args()

    arguments = {'output': args.output,
                 'increment': args.auto_increment,
                 'skip': [],
                 'filter': {},
                 'input': [] }

    for arg in rest:
        if arg.startswith('--skip-'):
            arguments['skip'].append(arg[7:])
        elif arg.startswith('--filter-'):
            key, value = arg[9:].split('=')
            arguments['filter'][key] = value
        else:
            arguments['input'] = arg

    return arguments

if __name__ == '__main__':
    args = parse_commandline()
    wrangle(args['input'], outputfile=args['output'], skips=args['skip'],
            filters=args['filter'], increment=args['increment'])

