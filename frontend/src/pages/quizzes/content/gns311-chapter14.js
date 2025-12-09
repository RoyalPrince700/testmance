// Quiz data for GNS 311 Chapter 14: Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities
// Questions generated from the actual chapter content

export const gns311Chapter14Quiz = {
  title: 'GNS 311 Chapter 14: Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities',
  description: 'Test your understanding of statistical hypothesis testing, null and alternative hypotheses, Type I and Type II errors, and practical applications across disciplines based on Chapter 14 content',
  courseCode: 'GNS 311',
  chapterTitle: 'Concepts of Hypothesis Testing in Sciences, Social Sciences and Humanities',
  passingScore: 70,
  timeLimit: 30, // minutes
  questions: [
    // EASY QUESTIONS (Basic Recall)
    {
      question: 'What is the primary purpose of statistical hypothesis testing?',
      options: [
        'To prove theories are always correct',
        'To make inferences about populations from sample data',
        'To eliminate the need for data collection',
        'To replace scientific observation'
      ],
      correctAnswer: 1,
      explanation: 'Hypothesis testing helps researchers understand how reliably they can generalize observed results in a sample to the larger population from which the sample was drawn.',
      points: 1
    },
    {
      question: 'Which of the following represents the null hypothesis (H0)?',
      options: [
        'The hypothesis of interest that researchers want to prove',
        'The hypothesis of "no effect" or "no difference"',
        'The hypothesis that is always rejected',
        'The hypothesis based on sample data'
      ],
      correctAnswer: 1,
      explanation: 'The null hypothesis (H0) represents the hypothesis of "no effect" or "no difference" and is often what researchers want to disprove with their data.',
      points: 1
    },
    {
      question: 'What does Type I error represent?',
      options: [
        'Failing to reject H0 when H0 is actually false',
        'Rejecting H0 when H0 is actually true',
        'Correctly rejecting H0',
        'Correctly accepting H0'
      ],
      correctAnswer: 1,
      explanation: 'Type I error (alpha) occurs when we reject the null hypothesis when it is actually true, also known as a false positive.',
      points: 1
    },
    {
      question: 'What is the typical significance level (alpha) used in hypothesis testing?',
      options: [
        '0.01',
        '0.05',
        '0.10',
        '0.50'
      ],
      correctAnswer: 1,
      explanation: 'The significance level alpha is commonly set at 0.05 (5%), representing the probability of making a Type I error.',
      points: 1
    },
    {
      question: 'Which step in hypothesis testing involves formulating H0 and H1?',
      options: [
        'State the research question',
        'Specify the hypotheses',
        'Choose and calculate test statistic',
        'Draw conclusion'
      ],
      correctAnswer: 1,
      explanation: 'Step 2 in Fisher\'s framework involves specifying the null and alternative hypotheses based on the research question.',
      points: 1
    },

    // MEDIUM QUESTIONS (Understanding)
    {
      question: 'Why is hypothesis testing particularly important in scientific research?',
      options: [
        'Because scientists prefer complex statistical methods',
        'Because complete population data is rarely available',
        'Because hypothesis testing eliminates uncertainty',
        'Because it makes research more expensive'
      ],
      correctAnswer: 1,
      explanation: 'Hypothesis testing is essential because researchers rarely have access to complete population data and must make inferences from samples.',
      points: 1
    },
    {
      question: 'What is the relationship between null and alternative hypotheses?',
      options: [
        'They are always the same',
        'They can both be true simultaneously',
        'They are mutually exclusive and exhaustive',
        'They are randomly selected'
      ],
      correctAnswer: 2,
      explanation: 'Null and alternative hypotheses are mutually exclusive (cannot both be true) and exhaustive (cover all possible truths about the relationship).',
      points: 1
    },
    {
      question: 'What does statistical power represent?',
      options: [
        'The probability of making a Type I error',
        'The probability of failing to reject H0 when H0 is true',
        'The probability of correctly rejecting H0 when H0 is false',
        'The level of statistical significance'
      ],
      correctAnswer: 2,
      explanation: 'Power (1 - beta) is the probability of correctly rejecting the null hypothesis when it is actually false.',
      points: 1
    },
    {
      question: 'Which assumption is NOT typically required for valid hypothesis tests?',
      options: [
        'Complete knowledge of population parameters',
        'Random sampling',
        'Normality of data',
        'Independence of observations'
      ],
      correctAnswer: 0,
      explanation: 'While random sampling, normality, and independence are key assumptions, complete knowledge of population parameters is exactly what hypothesis testing helps us overcome.',
      points: 1
    },
    {
      question: 'What is a common misconception about p-values?',
      options: [
        'They can be calculated for any sample size',
        'They represent the probability that H0 is true',
        'They depend on both effect size and sample size',
        'They are always between 0 and 1'
      ],
      correctAnswer: 1,
      explanation: 'A common misconception is that p-value represents the probability that the null hypothesis is true, when it actually represents the probability of observing data as extreme as yours, assuming H0 is true.',
      points: 1
    },
    {
      question: 'Why is random sampling important in hypothesis testing?',
      options: [
        'It makes calculations easier',
        'It reduces the need for large sample sizes',
        'It ensures each unit has equal chance of selection',
        'It eliminates Type II errors'
      ],
      correctAnswer: 2,
      explanation: 'Random sampling ensures each unit in the population has an equal chance of selection, reducing bias and ensuring generalizability of results.',
      points: 1
    },
    {
      question: 'What happens when we fail to reject the null hypothesis?',
      options: [
        'We prove H0 is true',
        'We prove H1 is false',
        'The data are meaningless',
        'We have insufficient evidence to reject H0'
      ],
      correctAnswer: 3,
      explanation: 'Failing to reject H0 only means there is insufficient evidence to conclude H0 is false; it does not prove H0 is true.',
      points: 1
    },
    {
      question: 'Which type of test statistic would be used for comparing two sample means?',
      options: [
        'z-test',
        'F-test',
        't-test',
        'Chi-square test'
      ],
      correctAnswer: 2,
      explanation: 'The t-test is commonly used for comparing means when population standard deviations are unknown and sample sizes are relatively small.',
      points: 1
    },
    {
      question: 'What is the relationship between Type I and Type II errors?',
      options: [
        'They always occur together',
        'Reducing one automatically reduces the other',
        'They are independent of sample size',
        'They represent a trade-off that researchers must balance'
      ],
      correctAnswer: 3,
      explanation: 'Type I and Type II errors represent a trade-off; actions to reduce one type of error typically increase the risk of the other.',
      points: 1
    },
    {
      question: 'What does the Central Limit Theorem allow in hypothesis testing?',
      options: [
        'Small samples to be normally distributed',
        'Large samples to approximate normal distribution',
        'Non-normal data to be transformed',
        'Population parameters to be ignored'
      ],
      correctAnswer: 1,
      explanation: 'The Central Limit Theorem allows large samples to approximate normal distribution even when the underlying population is not normal.',
      points: 1
    },

    // DIFFICULT QUESTIONS (Analysis/Application)
    {
      question: 'In the lubricant testing example, why was the null hypothesis H0: mu ≥ 675 mum rather than H0: mu = 675 mum?',
      options: [
        'Because one-tailed tests are always preferred',
        'Because the specification is directional',
        'Because we want to test if it meets the requirement',
        'Because the data showed wear above 675 mum'
      ],
      correctAnswer: 1,
      explanation: 'The null hypothesis was set as mu ≥ 675 mum because the specification requires mean wear to be less than 675 mum, making this a directional (one-tailed) test.',
      points: 1
    },
    {
      question: 'Why might a researcher choose alpha = 0.01 instead of alpha = 0.05 in a drug safety trial?',
      options: [
        'To make it easier to reject H0',
        'To reduce the risk of Type I error due to severe consequences',
        'To increase statistical power',
        'To reduce sample size requirements'
      ],
      correctAnswer: 1,
      explanation: 'In drug safety trials, the consequences of approving an unsafe drug (Type I error) are severe, so researchers use a more stringent alpha level like 0.01.',
      points: 1
    },
    {
      question: 'How does sample size affect the relationship between statistical and practical significance?',
      options: [
        'Large samples always increase practical significance',
        'Large samples can make tiny effects statistically significant',
        'Small samples eliminate practical significance concerns',
        'Sample size has no effect on significance'
      ],
      correctAnswer: 1,
      explanation: 'With very large samples, even tiny effects can become statistically significant, but they may not be practically meaningful.',
      points: 1
    },
    {
      question: 'In the context of hypothesis testing, what does "absence of evidence is not evidence of absence" mean?',
      options: [
        'We can never prove anything with statistics',
        'Failing to reject H0 does not prove H0 is true',
        'All statistical tests are unreliable',
        'Hypothesis testing should be abandoned'
      ],
      correctAnswer: 1,
      explanation: 'This phrase reminds us that failing to reject the null hypothesis due to insufficient evidence does not constitute proof that the null hypothesis is true.',
      points: 1
    },
    {
      question: 'Why would independence of observations be violated in time series data?',
      options: [
        'Because measurements are taken at different times',
        'Because consecutive observations are often correlated',
        'Because time series data cannot be random',
        'Because sample sizes are always small'
      ],
      correctAnswer: 1,
      explanation: 'In time series data, consecutive observations are often correlated (autocorrelated), violating the independence assumption required for many hypothesis tests.',
      points: 1
    },
    {
      question: 'What is the primary reason the five-step hypothesis testing process is systematic?',
      options: [
        'To make research more complicated',
        'To ensure objectivity and reproducibility',
        'To increase the chance of Type I errors',
        'To reduce the need for statistical knowledge'
      ],
      correctAnswer: 1,
      explanation: 'The systematic five-step process ensures objectivity, reduces bias, and allows other researchers to reproduce and verify the results.',
      points: 1
    },
    {
      question: 'How does the concept of statistical power relate to sample size?',
      options: [
        'Power decreases as sample size increases',
        'Power is independent of sample size',
        'Larger samples generally increase statistical power',
        'Sample size only affects Type I error rate'
      ],
      correctAnswer: 2,
      explanation: 'Larger sample sizes generally increase statistical power by reducing the standard error and making it easier to detect real effects.',
      points: 1
    },
    {
      question: 'Why is it problematic to interpret a non-significant result as "no effect"?',
      options: [
        'Because statistical tests are always wrong',
        'Because the study might have been underpowered',
        'Because significance levels are arbitrary',
        'Because all null hypotheses are false'
      ],
      correctAnswer: 1,
      explanation: 'A non-significant result might simply indicate the study was underpowered (too small sample), not that there is truly no effect.',
      points: 1
    },
    {
      question: 'In the lubricant example, what would happen if the researcher used alpha = 0.10 instead of alpha = 0.05?',
      options: [
        'The critical value would become more negative',
        'The test would be more conservative',
        'The probability of Type I error would increase',
        'The sample size requirement would decrease'
      ],
      correctAnswer: 2,
      explanation: 'Using alpha = 0.10 instead of alpha = 0.05 would increase the probability of Type I error, making the test less conservative.',
      points: 1
    },
    {
      question: 'Why do engineering applications of hypothesis testing often use one-tailed tests?',
      options: [
        'Because two-tailed tests are mathematically impossible',
        'Because specifications are often directional',
        'Because engineers prefer simpler calculations',
        'Because one-tailed tests always have higher power'
      ],
      correctAnswer: 1,
      explanation: 'Engineering specifications are often directional (e.g., "must be less than X" or "must be greater than Y"), making one-tailed tests more appropriate.',
      points: 1
    },
    {
      question: 'What is the relationship between effect size and statistical power?',
      options: [
        'Larger effect sizes decrease power',
        'Effect size has no relationship to power',
        'Larger effect sizes generally increase power',
        'Only sample size affects power, not effect size'
      ],
      correctAnswer: 2,
      explanation: 'Larger effect sizes are easier to detect, generally increasing statistical power for a given sample size.',
      points: 1
    },
    {
      question: 'Why is it important to consider both statistical and practical significance?',
      options: [
        'Because statistical significance guarantees practical importance',
        'Because they are always the same',
        'Because statistical significance does not guarantee practical importance',
        'Because practical significance is irrelevant'
      ],
      correctAnswer: 2,
      explanation: 'Statistical significance indicates whether an effect exists beyond chance, but does not guarantee the effect is large enough to be practically meaningful.',
      points: 1
    },
    {
      question: 'In the context of hypothesis testing, what does "reproducibility" require?',
      options: [
        'The same researcher repeating the study',
        'Different researchers using the same methods getting similar results',
        'Using the same statistical software',
        'Publishing in the same journal'
      ],
      correctAnswer: 1,
      explanation: 'Reproducibility requires that different researchers, using the same methods and data collection procedures, should obtain similar results.',
      points: 1
    },
    {
      question: 'Why might a researcher choose a critical value approach over a p-value approach?',
      options: [
        'Because p-values are more difficult to calculate',
        'Because critical values provide more precision',
        'Because some fields prefer traditional methods',
        'Because p-values are less reliable'
      ],
      correctAnswer: 2,
      explanation: 'Some fields or researchers prefer the critical value approach due to tradition, familiarity, or because it provides a clear decision boundary.',
      points: 1
    },
    {
      question: 'What happens to Type II error probability as sample size increases?',
      options: [
        'It always increases',
        'It always decreases',
        'It stays the same',
        'It depends on the effect size'
      ],
      correctAnswer: 1,
      explanation: 'As sample size increases, Type II error probability generally decreases because larger samples provide more statistical power.',
      points: 1
    },
    {
      question: 'Why is the normality assumption less critical with large samples?',
      options: [
        'Because the data become normal automatically',
        'Because the Central Limit Theorem applies',
        'Because large samples eliminate all statistical issues',
        'Because normality is not needed for large samples'
      ],
      correctAnswer: 1,
      explanation: 'The Central Limit Theorem states that with large samples, the sampling distribution of the mean approaches normality regardless of the underlying population distribution.',
      points: 1
    },
    {
      question: 'How does the concept of "mutually exclusive" hypotheses relate to decision making?',
      options: [
        'It means only one hypothesis can be accepted',
        'It means both hypotheses can be true',
        'It means neither hypothesis can be tested',
        'It means hypotheses can be changed during testing'
      ],
      correctAnswer: 0,
      explanation: 'Mutually exclusive hypotheses mean that if one is true, the other must be false, forcing a clear decision between accepting or rejecting the null hypothesis.',
      points: 1
    },
    {
      question: 'What is the main advantage of using a systematic hypothesis testing framework?',
      options: [
        'It eliminates the need for statistical knowledge',
        'It reduces researcher bias and ensures consistency',
        'It makes all results statistically significant',
        'It reduces the need for sample data'
      ],
      correctAnswer: 1,
      explanation: 'The systematic framework reduces researcher bias by providing a standardized approach and ensures consistency across different studies and researchers.',
      points: 1
    },
    {
      question: 'Why might failing to meet the independence assumption invalidate hypothesis test results?',
      options: [
        'Because it makes calculations impossible',
        'Because it violates the mathematical basis of most test statistics',
        'Because it only affects Type I error rates',
        'Because independence is not important'
      ],
      correctAnswer: 1,
      explanation: 'Most hypothesis test statistics assume independence of observations; violation of this assumption can lead to incorrect standard errors and invalid p-values.',
      points: 1
    },
    {
      question: 'In the lubricant example, what would constitute a Type II error?',
      options: [
        'Concluding the lubricant meets specs when it actually does',
        'Concluding the lubricant does not meet specs when it actually does',
        'Using the wrong significance level',
        'Having too small a sample size'
      ],
      correctAnswer: 1,
      explanation: 'A Type II error would occur if we fail to reject H0 (conclude specs not met) when H0 is actually false (lubricant truly meets specs).',
      points: 1
    },
    {
      question: 'How does the choice of significance level affect research in different fields?',
      options: [
        'It has no effect on different fields',
        'Fields with severe consequences of false positives use lower alpha',
        'All fields should use alpha = 0.05',
        'Significance levels are determined randomly'
      ],
      correctAnswer: 1,
      explanation: 'Fields where false positives have severe consequences (like drug testing) use lower significance levels, while fields with less severe consequences might use higher levels.',
      points: 1
    },
    {
      question: 'What is the relationship between confidence intervals and hypothesis testing?',
      options: [
        'They are completely unrelated',
        'Confidence intervals can be used to conduct hypothesis tests',
        'Hypothesis tests provide confidence intervals',
        'They use different statistical principles'
      ],
      correctAnswer: 1,
      explanation: 'Confidence intervals can be used to conduct hypothesis tests - if the hypothesized value falls outside the confidence interval, reject H0.',
      points: 1
    },
    {
      question: 'Why is it problematic when researchers "p-hack" by testing multiple hypotheses?',
      options: [
        'It makes research more expensive',
        'It artificially inflates Type I error rates',
        'It reduces statistical power',
        'It makes results less reproducible'
      ],
      correctAnswer: 1,
      explanation: 'Testing multiple hypotheses without adjustment increases the overall Type I error rate beyond the nominal alpha level.',
      points: 1
    },
    {
      question: 'What does it mean when we say hypothesis testing provides "information for decision-making"?',
      options: [
        'It makes all decisions automatically',
        'It provides evidence but humans must weigh consequences',
        'It eliminates the need for judgment',
        'It provides definitive proof'
      ],
      correctAnswer: 1,
      explanation: 'Hypothesis testing provides probabilistic evidence about population parameters, but humans must consider context, costs, and consequences when making decisions.',
      points: 1
    },
    {
      question: 'Why would a directional (one-tailed) test be more powerful than a non-directional (two-tailed) test?',
      options: [
        'Because it uses more data',
        'Because it concentrates alpha in one tail of the distribution',
        'Because it requires smaller samples',
        'Because it eliminates Type II errors'
      ],
      correctAnswer: 1,
      explanation: 'A one-tailed test concentrates all the alpha in one tail of the distribution, making it easier to reject H0 in that direction and increasing power.',
      points: 1
    },
    {
      question: 'How does the concept of "exhaustive" hypotheses ensure complete coverage?',
      options: [
        'It means all possible outcomes are covered',
        'It means hypotheses can be changed',
        'It means some outcomes are ignored',
        'It means hypotheses are randomly selected'
      ],
      correctAnswer: 0,
      explanation: 'Exhaustive hypotheses cover all possible truths about the relationship being studied, ensuring there are no gaps in the testing framework.',
      points: 1
    },
    {
      question: 'What is the primary limitation of hypothesis testing mentioned in the chapter?',
      options: [
        'It requires too much mathematical knowledge',
        'It provides information but humans make decisions',
        'It cannot handle large datasets',
        'It only works for normally distributed data'
      ],
      correctAnswer: 1,
      explanation: 'The chapter notes that hypothesis testing provides information for decision-making, but humans must still make the actual decisions based on context and consequences.',
      points: 1
    },
    {
      question: 'Why is the systematic nature of hypothesis testing important for scientific progress?',
      options: [
        'It makes science more complicated',
        'It allows cumulative knowledge building through standardized methods',
        'It prevents new discoveries',
        'It eliminates creativity in research'
      ],
      correctAnswer: 1,
      explanation: 'The systematic approach allows scientific knowledge to accumulate through standardized, reproducible methods that can be verified and built upon.',
      points: 1
    },
    {
      question: 'How does the concept of power relate to the "absence of evidence" principle?',
      options: [
        'High power guarantees evidence will be found',
        'Low power increases the risk of concluding "no effect" when an effect exists',
        'Power is unrelated to evidence interpretation',
        'Power only affects Type I errors'
      ],
      correctAnswer: 1,
      explanation: 'Low statistical power increases the risk of Type II error - failing to detect a real effect, which could lead to incorrectly concluding "absence of evidence" when evidence actually exists but was missed.',
      points: 1
    },
    {
      question: 'Why might engineering specifications often lead to one-tailed hypotheses?',
      options: [
        'Because engineers cannot do two-tailed tests',
        'Because specifications define acceptable ranges with clear boundaries',
        'Because one-tailed tests are mathematically simpler',
        'Because engineering data is never normally distributed'
      ],
      correctAnswer: 1,
      explanation: 'Engineering specifications typically define clear boundaries (e.g., "must be less than 675 mum"), making one-tailed tests more appropriate for testing compliance.',
      points: 1
    },
    {
      question: 'What is the relationship between sample size and the reliability of hypothesis test conclusions?',
      options: [
        'Small samples always provide more reliable conclusions',
        'Large samples reduce uncertainty but may detect trivial effects',
        'Sample size has no effect on reliability',
        'Only small samples can detect large effects'
      ],
      correctAnswer: 1,
      explanation: 'While larger samples reduce uncertainty and increase power, they may also detect effects so small they lack practical significance.',
      points: 1
    },
    {
      question: 'How does the concept of "mutually exclusive and exhaustive" hypotheses prevent ambiguity?',
      options: [
        'It allows multiple interpretations',
        'It forces clear decision boundaries',
        'It makes testing impossible',
        'It eliminates the need for data'
      ],
      correctAnswer: 1,
      explanation: 'Mutually exclusive and exhaustive hypotheses create clear decision boundaries, forcing researchers to make definitive choices about rejecting or failing to reject H0.',
      points: 1
    },
    {
      question: 'Why is understanding Type I and Type II errors crucial for research design?',
      options: [
        'To make research more expensive',
        'To balance the costs and consequences of different error types',
        'To eliminate all possible errors',
        'To reduce sample size requirements'
      ],
      correctAnswer: 1,
      explanation: 'Understanding error types helps researchers balance the costs and consequences of false positives versus false negatives when designing studies.',
      points: 1
    },
    {
      question: 'How does the systematic hypothesis testing process contribute to scientific integrity?',
      options: [
        'It prevents negative results from being published',
        'It provides a transparent, verifiable method for drawing conclusions',
        'It makes all results statistically significant',
        'It eliminates the need for peer review'
      ],
      correctAnswer: 1,
      explanation: 'The systematic process provides transparency and verifiability, allowing other researchers to understand and potentially reproduce the methods and conclusions.',
      points: 1
    },
    {
      question: 'What is the danger of interpreting statistical significance as practical importance?',
      options: [
        'It makes research less rigorous',
        'It can lead to implementation of meaningless findings',
        'It reduces statistical power',
        'It increases Type I error rates'
      ],
      correctAnswer: 1,
      explanation: 'Statistically significant but practically meaningless effects can lead to wasted resources implementing changes that have no real-world impact.',
      points: 1
    },
    // ADDITIONAL DIFFICULT QUESTIONS (Analysis/Application)
    {
      question: 'In the context of statistical hypothesis testing, what does the concept of "statistical power" directly relate to?',
      options: [
        'The probability of correctly rejecting H0 when it is actually true',
        'The probability of correctly rejecting H0 when H0 is actually false',
        'The probability of making a Type II error',
        'The level of statistical significance chosen'
      ],
      correctAnswer: 1,
      explanation: 'Statistical power is defined as 1 - β, where β is the probability of Type II error. It represents the probability of correctly detecting a real effect when one exists.',
      points: 1
    },
    {
      question: 'When designing a hypothesis test, why might a researcher choose a directional (one-tailed) alternative hypothesis over a non-directional (two-tailed) alternative?',
      options: [
        'Because directional tests are always more powerful',
        'Because the research question specifies the direction of the expected effect',
        'Because directional tests reduce the risk of Type I errors',
        'Because two-tailed tests are mathematically invalid'
      ],
      correctAnswer: 1,
      explanation: 'A directional hypothesis is chosen when the research question specifies the expected direction of the effect (e.g., "greater than" or "less than"), allowing for more focused testing.',
      points: 1
    },
    {
      question: 'What is the primary statistical consequence of violating the assumption of independent observations in hypothesis testing?',
      options: [
        'Increased Type I error rate',
        'Inflated standard errors and unreliable p-values',
        'Reduced statistical power',
        'Biased parameter estimates'
      ],
      correctAnswer: 1,
      explanation: 'When observations are not independent, the effective sample size is reduced, leading to inflated standard errors and unreliable test statistics and p-values.',
      points: 1
    },
    {
      question: 'In hypothesis testing, what does the Central Limit Theorem enable for large samples?',
      options: [
        'Use of parametric tests even with non-normal population distributions',
        'Automatic correction of Type I errors',
        'Elimination of the need for random sampling',
        'Direct calculation of population parameters'
      ],
      correctAnswer: 0,
      explanation: 'The CLT states that for large samples, the sampling distribution of the mean approaches normality regardless of the population distribution, enabling parametric tests.',
      points: 1
    },
    {
      question: 'Why is it problematic to interpret a statistically significant result as evidence that the null hypothesis is false?',
      options: [
        'Because statistical significance guarantees practical importance',
        'Because p-values can never be exactly zero',
        'Because statistical significance only indicates the unlikelihood of the data under H0, not proof of H1',
        'Because significance levels are arbitrarily chosen'
      ],
      correctAnswer: 2,
      explanation: 'Statistical significance indicates that the observed data would be unlikely under H0, but does not constitute proof that H1 is true or that H0 is false.',
      points: 1
    },
    {
      question: 'What is the relationship between sample size and the ability to detect small effect sizes in hypothesis testing?',
      options: [
        'Larger samples can detect smaller effects that are still statistically significant',
        'Smaller samples are better for detecting small effects',
        'Sample size has no effect on effect size detection',
        'Large samples always eliminate the possibility of small effects'
      ],
      correctAnswer: 0,
      explanation: 'With larger samples, smaller effect sizes can achieve statistical significance because the standard error decreases, increasing test sensitivity.',
      points: 1
    },
    {
      question: 'In the context of multiple hypothesis testing, what problem arises when conducting many tests simultaneously?',
      options: [
        'Increased risk of Type II errors',
        'Inflated overall Type I error rate (family-wise error rate)',
        'Reduced statistical power',
        'Elimination of false positives'
      ],
      correctAnswer: 1,
      explanation: 'When conducting multiple tests, the probability of at least one Type I error increases beyond the nominal alpha level, requiring corrections like Bonferroni.',
      points: 1
    },
    {
      question: 'What is the primary limitation of using p-values as the sole basis for drawing conclusions in hypothesis testing?',
      options: [
        'They depend on sample size rather than effect size',
        'They provide no information about the magnitude or practical importance of effects',
        'They cannot be calculated for non-parametric tests',
        'They are always larger than the significance level'
      ],
      correctAnswer: 1,
      explanation: 'P-values indicate whether an effect exists beyond chance, but provide no information about effect magnitude, precision, or practical significance.',
      points: 1
    },
    {
      question: 'Why does the assumption of normality become less critical with large sample sizes?',
      options: [
        'Because large samples automatically become normally distributed',
        'Because the Central Limit Theorem applies to the sampling distribution of the mean',
        'Because normality assumptions are never important',
        'Because large samples eliminate all statistical assumptions'
      ],
      correctAnswer: 1,
      explanation: 'The CLT ensures that the sampling distribution of the mean approaches normality with large samples, regardless of the underlying population distribution.',
      points: 1
    },
    {
      question: 'What is the conceptual difference between statistical significance and practical significance?',
      options: [
        'Statistical significance is objective, practical significance is subjective',
        'Statistical significance indicates an effect exists, practical significance indicates its importance',
        'Practical significance is always more important than statistical significance',
        'They are identical concepts measured differently'
      ],
      correctAnswer: 1,
      explanation: 'Statistical significance indicates whether an effect is unlikely to be due to chance, while practical significance evaluates whether the effect is large enough to matter in real-world applications.',
      points: 1
    },
    {
      question: 'In hypothesis testing, what does the power of a statistical test represent?',
      options: [
        'The probability that the test will reject H0 when H0 is true',
        'The probability that the test will reject H0 when H0 is false',
        'The probability that the test will accept H0 when H0 is true',
        'The probability that the test will accept H0 when H0 is false'
      ],
      correctAnswer: 1,
      explanation: 'Power = 1 - β, where β is the Type II error rate. It represents the test\'s ability to detect a real effect when one exists.',
      points: 1
    },
    {
      question: 'Why might a researcher choose a more stringent significance level (e.g., alpha = 0.01 instead of 0.05)?',
      options: [
        'To increase the chances of rejecting H0',
        'To reduce the risk of Type I errors in high-stakes decisions',
        'To make the study more statistically powerful',
        'To reduce the required sample size'
      ],
      correctAnswer: 1,
      explanation: 'In high-stakes applications (e.g., drug testing, safety regulations), researchers use lower alpha levels to minimize the risk of false positives (Type I errors).',
      points: 1
    },
    {
      question: 'What is the primary statistical interpretation of failing to reject the null hypothesis?',
      options: [
        'Proof that H0 is true',
        'Evidence that H1 is false',
        'Insufficient evidence to conclude that an effect exists',
        'The data are statistically meaningless'
      ],
      correctAnswer: 2,
      explanation: 'Failing to reject H0 means there is insufficient evidence to conclude an effect exists; it does not prove H0 is true or H1 is false.',
      points: 1
    },
    {
      question: 'How does the concept of confidence intervals complement hypothesis testing?',
      options: [
        'They provide the same information in different formats',
        'Confidence intervals show the range of plausible values for the parameter, while hypothesis tests indicate whether specific values are plausible',
        'Confidence intervals are more precise than hypothesis tests',
        'Hypothesis tests provide more information than confidence intervals'
      ],
      correctAnswer: 1,
      explanation: 'Confidence intervals show the range of parameter values compatible with the data, while hypothesis tests determine if specific parameter values (like zero effect) are plausible.',
      points: 1
    },
    {
      question: 'What is the relationship between effect size and required sample size in hypothesis testing?',
      options: [
        'Larger effect sizes require larger samples',
        'Smaller effect sizes require larger samples to achieve adequate power',
        'Effect size has no relationship to sample size requirements',
        'Large effect sizes eliminate the need for statistical testing'
      ],
      correctAnswer: 1,
      explanation: 'To detect smaller effect sizes with adequate statistical power, larger sample sizes are required because smaller effects are harder to distinguish from random variation.',
      points: 1
    },
    {
      question: 'Why is it important to consider both Type I and Type II errors when designing a study?',
      options: [
        'Because they always occur together',
        'Because reducing one type of error automatically reduces the other',
        'Because they represent a trade-off that affects study design and interpretation',
        'Because they are mathematically identical'
      ],
      correctAnswer: 2,
      explanation: 'Type I and Type II errors represent a fundamental trade-off; actions to reduce one type (e.g., lowering alpha) typically increase the risk of the other.',
      points: 1
    },
    {
      question: 'What does the p-value represent in the context of hypothesis testing?',
      options: [
        'The probability that H0 is true',
        'The probability of observing the data (or more extreme) assuming H0 is true',
        'The probability that H1 is true',
        'The probability that the effect is practically significant'
      ],
      correctAnswer: 1,
      explanation: 'The p-value is the probability of observing data as extreme as (or more extreme than) what was observed, assuming the null hypothesis is true.',
      points: 1
    },
    {
      question: 'In what situation might a researcher prefer a non-parametric test over a parametric test?',
      options: [
        'When the sample size is very large',
        'When the data violate parametric assumptions (e.g., normality)',
        'When parametric tests are mathematically simpler',
        'When the research question requires exact p-values'
      ],
      correctAnswer: 1,
      explanation: 'Non-parametric tests are preferred when data violate parametric assumptions like normality or when dealing with ordinal data or small samples.',
      points: 1
    },
    {
      question: 'What is the primary purpose of post-hoc power analysis after a non-significant result?',
      options: [
        'To prove that H0 is true',
        'To determine whether the study was adequately powered to detect the effect of interest',
        'To justify accepting H0',
        'To calculate the exact p-value'
      ],
      correctAnswer: 1,
      explanation: 'Post-hoc power analysis helps determine if the study had sufficient power to detect the expected effect size, distinguishing between "no effect" and "underpowered study".',
      points: 1
    },
    {
      question: 'Why does statistical significance not guarantee practical or clinical significance?',
      options: [
        'Because statistical tests are always wrong',
        'Because large samples can make trivial effects statistically significant',
        'Because statistical significance depends only on p-values',
        'Because practical significance is subjective'
      ],
      correctAnswer: 1,
      explanation: 'With sufficiently large samples, even tiny effects can achieve statistical significance, but they may be too small to matter in practical applications.',
      points: 1
    }
  ]
};